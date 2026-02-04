// Dual video comparison slider
// Modified from video_comparison.js to handle two separate video sources

function playDualVids(containerId) {
    var container = document.getElementById(containerId);
    var videoMerge = document.getElementById(containerId + "Canvas");
    var vid1 = document.getElementById(containerId + "Left");
    var vid2 = document.getElementById(containerId + "Right");

    var position = 0.5; // Start with slider in the middle
    var mergeContext = videoMerge.getContext("2d");
    var isPlaying = true;
    var isInViewport = false;
    var animationFrame = null;

    // Make sure both videos are ready
    if (vid1.readyState > 3 && vid2.readyState > 3) {
        // Set canvas dimensions based on video size
        var vidWidth = vid1.videoWidth;
        var vidHeight = vid1.videoHeight;
        videoMerge.width = vidWidth;
        videoMerge.height = vidHeight;

        function trackLocation(e) {
            // Normalize to [0, 1]
            var bcr = videoMerge.getBoundingClientRect();
            position = ((e.pageX - bcr.x) / bcr.width);
            position = Math.max(0, Math.min(1, position)); // Clamp between 0 and 1
        }
        
        function trackLocationTouch(e) {
            // Normalize to [0, 1]
            var bcr = videoMerge.getBoundingClientRect();
            position = ((e.touches[0].pageX - bcr.x) / bcr.width);
            position = Math.max(0, Math.min(1, position)); // Clamp between 0 and 1
        }

        videoMerge.addEventListener("mousemove", trackLocation, false); 
        videoMerge.addEventListener("touchstart", trackLocationTouch, false);
        videoMerge.addEventListener("touchmove", trackLocationTouch, false);

        function drawLoop() {
            if (!isPlaying) return;
            
            // Draw first video (left side)
            mergeContext.drawImage(vid1, 0, 0, vidWidth, vidHeight);
            
            // Draw second video (right side) from the position point
            var splitX = vidWidth * position;
            mergeContext.drawImage(vid2, splitX, 0, vidWidth - splitX, vidHeight, 
                                  splitX, 0, vidWidth - splitX, vidHeight);
            
            // Draw divider line
            mergeContext.beginPath();
            mergeContext.moveTo(vidWidth * position, 0);
            mergeContext.lineTo(vidWidth * position, vidHeight);
            mergeContext.closePath();
            mergeContext.strokeStyle = "#FFFFFF";
            mergeContext.lineWidth = 3;            
            mergeContext.stroke();
            
            // Draw outer stroke for visibility
            mergeContext.beginPath();
            mergeContext.moveTo(vidWidth * position, 0);
            mergeContext.lineTo(vidWidth * position, vidHeight);
            mergeContext.closePath();
            mergeContext.strokeStyle = "#000000";
            mergeContext.lineWidth = 5;            
            mergeContext.stroke();

            // Draw slider handle
            var arrowPosY = vidHeight / 2;
            var handleRadius = 20;
            
            // Draw handle circle
            mergeContext.beginPath();
            mergeContext.arc(vidWidth * position, arrowPosY, handleRadius, 0, Math.PI * 2, false);
            mergeContext.fillStyle = "rgba(255, 255, 255, 0.7)";
            mergeContext.fill();
            mergeContext.strokeStyle = "#000000";
            mergeContext.lineWidth = 2;
            mergeContext.stroke();
            
            // Draw left/right arrows inside the handle
            mergeContext.beginPath();
            // Left arrow
            mergeContext.moveTo(vidWidth * position - 10, arrowPosY);
            mergeContext.lineTo(vidWidth * position - 5, arrowPosY - 5);
            mergeContext.lineTo(vidWidth * position - 5, arrowPosY + 5);
            mergeContext.closePath();
            mergeContext.fillStyle = "#000000";
            mergeContext.fill();
            
            // Right arrow
            mergeContext.beginPath();
            mergeContext.moveTo(vidWidth * position + 10, arrowPosY);
            mergeContext.lineTo(vidWidth * position + 5, arrowPosY - 5);
            mergeContext.lineTo(vidWidth * position + 5, arrowPosY + 5);
            mergeContext.closePath();
            mergeContext.fillStyle = "#000000";
            mergeContext.fill();
            
            animationFrame = requestAnimationFrame(drawLoop);
        }
        
        // Check if element is in viewport
        function checkVisibility() {
            var rect = videoMerge.getBoundingClientRect();
            var isVisible = (
                rect.top >= -rect.height &&
                rect.left >= -rect.width &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + rect.height &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) + rect.width
            );
            
            if (isVisible && !isInViewport) {
                // Element just became visible
                isInViewport = true;
                if (!animationFrame) {
                    vid1.play();
                    vid2.play();
                    animationFrame = requestAnimationFrame(drawLoop);
                }
            } else if (!isVisible && isInViewport) {
                // Element just went out of viewport
                isInViewport = false;
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                    animationFrame = null;
                    vid1.pause();
                    vid2.pause();
                }
            }
        }
        
        // Initial check and setup scroll listener
        checkVisibility();
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);
        
        // Draw once to show initial state even if paused
        drawLoop();
    } else {
        // If videos aren't ready yet, try again in a moment
        setTimeout(function() {
            playDualVids(containerId);
        }, 100);
    }
    
    // Return control functions
    return {
        pause: function() {
            if (isPlaying) {
                isPlaying = false;
                vid1.pause();
                vid2.pause();
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                    animationFrame = null;
                }
            }
        },
        play: function() {
            if (!isPlaying && isInViewport) {
                isPlaying = true;
                vid1.play();
                vid2.play();
                if (!animationFrame) {
                    animationFrame = requestAnimationFrame(drawLoop);
                }
            }
        },
        dispose: function() {
            window.removeEventListener('scroll', checkVisibility);
            window.removeEventListener('resize', checkVisibility);
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
                animationFrame = null;
            }
            vid1.pause();
            vid2.pause();
        }
    };
}

function initDualVideoComparison(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    
    var vid1 = document.getElementById(containerId + "Left");
    var vid2 = document.getElementById(containerId + "Right");
    var canvas = document.getElementById(containerId + "Canvas");
    
    if (!vid1 || !vid2 || !canvas) return;
    
    // Hide the videos but keep them playing
    vid1.style.height = "0px";
    vid1.style.width = "0px";
    vid1.style.position = "absolute";
    
    vid2.style.height = "0px";
    vid2.style.width = "0px";
    vid2.style.position = "absolute";
    
    // Preload videos but don't autoplay until visible
    vid1.preload = "auto";
    vid2.preload = "auto";
    vid1.muted = true;
    vid2.muted = true;
    
    // Start the comparison when both videos are loaded
    function checkAndPlay() {
        if (vid1.readyState >= 4 && vid2.readyState >= 4) {
            playDualVids(containerId);
        } else {
            setTimeout(checkAndPlay, 100);
        }
    }
    
    // Load videos with low priority for better page performance
    vid1.setAttribute('loading', 'lazy');
    vid2.setAttribute('loading', 'lazy');
    
    // Start loading the videos
    vid1.load();
    vid2.load();
    
    // Check if videos are ready
    if (vid1.readyState >= 4 && vid2.readyState >= 4) {
        playDualVids(containerId);
    } else {
        vid1.addEventListener('loadeddata', checkAndPlay);
        vid2.addEventListener('loadeddata', checkAndPlay);
    }
}

// Initialize all dual video comparisons when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Use a small delay to let the page render first
    setTimeout(function() {
        var comparisons = document.querySelectorAll('.dual-video-compare-container');
        comparisons.forEach(function(container) {
            initDualVideoComparison(container.id);
        });
    }, 100);
});
