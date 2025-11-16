import React from "react";
import SectionTitle from "../components/SectionTitle";
import Paper from "../components/Paper";

const PubSection = () => {
    return (
        <div
            className="mt-5 p-4 container bg-white shadow-sm"
            style={{ maxWidth: 720, borderRadius: 10 }}
        >
            <SectionTitle title="Publications" />

            <Paper
                paperTitle="OnlineSplatter: Pose-Free Online 3D Reconstruction for Free-Moving Objects"
                authors="Mark He Huang, Lin Geng Foo, Christian Theobalt, Ying Sun, De Wen Soh"
                nameBold="Mark He Huang"
                venue="NeurIPS 2025 (Spotlight)"
                paperText="project"
                paperLink="https://markhh.com/OnlineSplatter/"
                codeText="code"
                codeLink=""
                arxivText="arXiv:2510.20605"
                arxivLink="https://arxiv.org/abs/2510.20605"
                cite={`@inproceedings{huang2025onlinesplatter,
  title = {OnlineSplatter: Pose-Free Online 3D Reconstruction for Free-Moving Objects},
  author = {Huang, Mark He and Foo, Lin Geng and Theobalt, Christian and Sun, Ying and Soh, De Wen},
  booktitle = {Advances in Neural Information Processing Systems},
  year = {2025}
}`} />

            <Paper
                paperTitle="Learning to Unlearn for Robust Machine Unlearning"
                authors="Mark He Huang, Lin Geng Foo, Jun Liu"
                nameBold="Mark He Huang"
                venue="ECCV 2024"
                paperText="paper"
                paperLink="https://arxiv.org/abs/2407.10494"
                codeText="code"
                codeLink=""
                arxivText="arXiv:2407.10494"
                arxivLink="https://arxiv.org/abs/2407.10494"
                cite={`@inproceedings{huang2024learning,
  title={Learning to Unlearn for Robust Machine Unlearning},
  author={Huang, Mark He and Foo, Lin Geng and Liu, Jun},
  booktitle={European Conference on Computer Vision},
  year={2024},
  organization={Springer}
}`} />

            <Paper
                paperTitle="Meta Compositional Referring Expression Segmentation"
                authors="Li Xu, Mark He Huang, Xindi Shang, Zehuan Yuan, Ying Sun, Jun Liu"
                nameBold="Mark He Huang"
                venue="CVPR 2023"
                paperText="paper"
                paperLink="https://openaccess.thecvf.com/content/CVPR2023/html/Xu_Meta_Compositional_Referring_Expression_Segmentation_CVPR_2023_paper.html"
                codeText="code"
                codeLink=""
                arxivText="arXiv:2304.04415"
                arxivLink="https://arxiv.org/abs/2304.04415"
                cite={`@inproceedings{xu2023meta,
  title={Meta Compositional Referring Expression Segmentation},
  author={Xu, Li and Huang, Mark He and Shang, Xindi and Yuan, Zehuan and Sun, Ying and Liu, Jun},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={19478--19487},
  year={2023}
}`}
            />

            <Paper
                paperTitle="SUTD-TrafficQA: A Question Answering Benchmark and an Efficient Network for Video Reasoning over Traffic Events"
                authors="Li Xu, He Huang, Jun Liu"
                nameBold="He Huang"
                venue="CVPR 2021"
                paperText="paper"
                paperLink="https://openaccess.thecvf.com/content/CVPR2021/html/Xu_SUTD-TrafficQA_A_Question_Answering_Benchmark_and_an_Efficient_Network_for_CVPR_2021_paper.html"
                codeText="dataset"
                codeLink="https://github.com/SUTDCV/SUTD-TrafficQA"
                arxivText="arXiv:2103.15538"
                arxivLink="https://arxiv.org/abs/2103.15538"
                cite={`@inproceedings{xu2021sutd,
  title={SUTD-TrafficQA: A Question Answering Benchmark and an Efficient Network for Video Reasoning over Traffic Events},
  author={Xu, Li and Huang, He and Liu, Jun},
  booktitle={Proceedings of the IEEE/CVF conference on computer vision and pattern recognition},
  pages={9878--9888},
  year={2021}
}`}
            />

            {/* <Paper
                paperTitle="The Multi-Modal Video Reasoning and Analyzing Competition"
                authors="H Peng, He Huang, L Xu, TJ Li, et al."
                nameBold="He Huang"
                venue="ICCVW 2021"
                paperText="paper"
                paperLink="https://openaccess.thecvf.com/content/ICCV2021W/MMVRA/html/Peng_The_Multi-Modal_Video_Reasoning_and_Analyzing_Competition_ICCVW_2021_paper.html"
                codeText="website"
                codeLink="https://sutdcv.github.io/multi-modal-video-reasoning"
                arxivText="arXiv:2108.08344"
                arxivLink="https://arxiv.org/abs/2108.08344"
                cite={`@InProceedings{Peng_2021_ICCV,
    author    = {Peng, Haoran and Huang, He and Xu, Li and Li, Tianjiao and Liu, Jun and Rahmani, Hossein and Ke, Qiuhong and Guo, Zhicheng and Wu, Cong and Li, Rongchang and Ye, Mang and Wang, Jiahao and Zhang, Jiaxu and Liu, Yuanzhong and He, Tao and Zhang, Fuwei and Liu, Xianbin and Lin, Tao},
    title     = {The Multi-Modal Video Reasoning and Analyzing Competition},
    booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV) Workshops},
    month     = {October},
    year      = {2021},
    pages     = {806-813}
}`}
            /> */}
        </div>
    );
};

export default PubSection;
