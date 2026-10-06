---
title: "One Model to Rig Them All: Diverse Skeleton Rigging with UniRig"
collection: publications
pub_key: unirig
permalink: /publications/unirig
date: 2025-04-17
venue: 'ACM Transactions on Graphics (SIGGRAPH 2025)'
paperurl: 'https://arxiv.org/pdf/2504.12451'
bibtex: |
  @article{zhang2025unirig,
    title   = {One Model to Rig Them All: Diverse Skeleton Rigging with UniRig},
    author  = {Zhang, Jia-Peng and Pu, Cheng-Feng and Guo, Meng-Hao and Cao, Yan-Pei and Hu, Shi-Min},
    journal = {ACM Transactions on Graphics (TOG)},
    year    = {2025},
    volume  = {44},
    number  = {4}
  }
---

The rapid evolution of 3D content creation, encompassing both AI-powered methods and traditional workflows, is driving an unprecedented demand for automated rigging solutions that can keep pace with the increasing complexity and diversity of 3D models. We introduce UniRig, a novel, unified framework for automatic skeletal rigging that leverages the power of large autoregressive models and a bone-point cross-attention mechanism to generate both high-quality skeletons and skinning weights. Unlike previous methods that struggle with complex or non-standard topologies, UniRig accurately predicts topologically valid skeleton structures thanks to a new Skeleton Tree Tokenization method that efficiently encodes hierarchical relationships within the skeleton. To train and evaluate UniRig, we present Rig-XL, a new large-scale dataset of over 14,000 rigged 3D models spanning a wide range of categories. UniRig significantly outperforms state-of-the-art academic and commercial methods, achieving a 215% improvement in rigging accuracy and a 194% improvement in motion accuracy on challenging datasets. Our method works seamlessly across diverse object categories, from detailed anime characters to complex organic and inorganic structures, demonstrating its versatility and robustness. By automating the tedious and time-consuming rigging process, UniRig has the potential to speed up animation pipelines with unprecedented ease and efficiency. Project Page: https://zjp-shadow.github.io/works/UniRig/
