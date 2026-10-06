---
title: "Transferring the Intelligence of VLMs to Robotic Control"
collection: publications
pub_key: vlm-robotic-control
permalink: /publications/vlm-robotic-control
date: 2026-09-26
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/pdf/2609.22966'
bibtex: |
  @article{guo2026transferring,
    title   = {Transferring the Intelligence of VLMs to Robotic Control},
    author  = {Guo, Meng-Hao and Mo, Zhe-Han and Wang, Jia-Jun and Zhang, Yi and Wang, Kejin and Deng, Yi-Xuan and Zhang, Jia-Peng and Rao, Yongming and Hu, Shi-Min},
    journal = {arXiv preprint arXiv:2609.22966},
    year    = {2026}
  }
---

Humans can seamlessly adapt to both physical and digital worlds, suggesting that while a digital-to-real gap exists in embodiment, environment and task, human intelligence itself may transfer across this gap. This naturally raises a fundamental question: can the intelligence of vision-language models (VLMs) similarly generalize from the digital world to the physical world for robotic control? We investigate this question through RoboDawn, a human-intuitive interface that exposes robotic control to an agentic VLM through a compact set of discrete translation, rotation, and gripper commands. Using this interface, the VLM controls a robot in a closed loop: it observes the current visual state, reasons about the next action, executes it, and adapts subsequent decisions to the resulting state. Furthermore, we introduce an in-context learning (ICL) scheme that uses a few demonstrations to ground the VLM in both interface usage and task-solving strategies. Experiments on RoboTwin 2.0 C2R and RoboDojo demonstrate that RoboDawn achieves strong performance without task-specific robot training. In the zero-shot setting, RoboDawn outperforms several strong policies trained on benchmarkspecific robot data, while a single in-context demonstration further yields substantial performance gains and establishes state-of-the-art (SOTA) results. On RoboTwin 2.0 C2R, the success rate increases from 53.2% zero-shot to 73.6% one-shot, exceeding the solid baseline π0.5 (46.0%). Similar gains are observed on RoboDojo, where success rate improves from 35.67% zero-shot to 47.17% one-shot. The same framework also transfers to real-world robots, performing block-in-basket and block stacking on Franka.
