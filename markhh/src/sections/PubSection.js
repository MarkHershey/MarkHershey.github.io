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
                paperTitle="SUTD-TrafficQA: A Question Answering Benchmark and an Efficient Network for Video Reasoning over Traffic Events"
                authors="Li Xu, MH Huang, Jun Liu"
                nameBold="MH Huang"
                venue="CVPR 2021"
                paperText="paper"
                paperLink="https://openaccess.thecvf.com/content/CVPR2021/html/Xu_SUTD-TrafficQA_A_Question_Answering_Benchmark_and_an_Efficient_Network_for_CVPR_2021_paper.html"
                codeText="dataset"
                codeLink="https://github.com/SUTDCV/SUTD-TrafficQA"
                arxivText="arXiv:2103.15538"
                arxivLink="https://arxiv.org/abs/2103.15538"
                cite={`@InProceedings{Xu_2021_CVPR,
    author    = {Xu, Li and Huang, He and Liu, Jun},
    title     = {SUTD-TrafficQA: A Question Answering Benchmark and an Efficient Network for Video Reasoning Over Traffic Events},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2021},
    pages     = {9878-9888}
}`}
            />

            <Paper
                paperTitle="The Multi-Modal Video Reasoning and Analyzing Competition"
                authors="H Peng, MH Huang, L Xu, TJ Li, et al."
                nameBold="MH Huang"
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
            />
        </div>
    );
};

export default PubSection;
