---
title: "TopoCap: Learning Topology-Agnostic Motion Priors for Monocular Video-to-Animation"
collection: publications
pub_key: topocap
permalink: /publications/topocap
date: 2026-06-10
venue: 'SIGGRAPH 2026 Conference Papers'
paperurl: 'https://arxiv.org/pdf/2606.12153'
bibtex: |
  @inproceedings{pu2026topocap,
    title     = {TopoCap: Learning Topology-Agnostic Motion Priors for Monocular Video-to-Animation},
    author    = {Pu, Cheng-Feng and Zhang, Jia-Peng and Guo, Meng-Hao and Cao, Yan-Pei and Hu, Shi-Min},
    booktitle = {SIGGRAPH 2026 Conference Papers},
    year      = {2026},
    doi       = {10.1145/3799902.3811159}
  }
---

The explosion of generative 3D assets has created a massive demand for animation, yet current motion capture methods remain brittle, restricted to species-specific templates (e.g., SMPL) or requiring labor-intensive manual rigging. We introduce TopoCap, the first unified framework capable of extracting motion from monocular video and retargeting it onto characters with arbitrary, unseen skeletal topologies, i.e., from bipeds to hexapods and inanimate objects, without test-time optimization. Our key insight is that while skeletal structures are combinatorial and discrete, the underlying physics of motion occupy a continuous, low-dimensional manifold. We materialize this insight via a two-stage generative pipeline. First, we learn a Universal Motion Manifold using a Graph CVAE that compresses heterogeneous kinematic chains into a shared, fixed-length latent code. By explicitly conditioning the decoder on a structural embedding of the target rig, we disentangle motion dynamics from skeletal topology. Second, we treat video-to-animation as a conditional flow matching problem, predicting these topology-agnostic codes from visual features. To learn this generalized prior, we introduce Mobjaverse, a massive-scale dataset curated from Objaverse-XL. Comprising over 5,000 unique skeletal topologies and 2 million frames, it exceeds the structural diversity of existing datasets by two orders of magnitude. Extensive experiments demonstrate that TopoCap outperforms specialist models on human and quadruped benchmarks while enabling zero-shot retargeting for the long tail of 3D creatures. Dataset is publicly available at https://huggingface.co/datasets/duckduckplz/Mobjaverse.
