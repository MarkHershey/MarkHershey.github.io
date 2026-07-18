import learningToUnlearnThumbnail from "../pics/publications/learning-to-unlearn.webp";
import mcresThumbnail from "../pics/publications/mcres.webp";
import onlineSplatterThumbnail from "../pics/publications/onlinesplatter.webp";
import psivgThumbnail from "../pics/publications/psivg.webp";
import trafficQaThumbnail from "../pics/publications/trafficqa.webp";

const AUTHORS = {
    linGengFoo: {
        name: "Lin Geng Foo",
        url: "https://lingeng.foo/",
    },
    markHeHuang: {
        name: "Mark He Huang",
        url: "https://markhh.com/",
        highlighted: true,
    },
    alexandrosLattas: {
        name: "Alexandros Lattas",
        url: "https://alexlattas.com/",
    },
    stylianosMoschoglou: {
        name: "Stylianos Moschoglou",
        url: "https://scholar.google.com/citations?user=bMuT5mkAAAAJ&hl=en",
    },
    thaboBeeler: {
        name: "Thabo Beeler",
        url: "https://thabobeeler.com/",
    },
    christianTheobalt: {
        name: "Christian Theobalt",
        url: "https://people.mpi-inf.mpg.de/~theobalt/",
    },
    yingSun: {
        name: "Ying Sun",
        url: "https://scholar.google.com.sg/citations?user=AJReaQ8AAAAJ&hl=en",
    },
    deWenSoh: {
        name: "De Wen Soh",
        url: "https://www.sutd.edu.sg/profile/soh-de-wen/",
    },
    junLiu: {
        name: "Jun Liu",
        url: "https://scholar.google.com/citations?user=Q5Ild8UAAAAJ",
    },
    liXu: {
        name: "Li Xu",
        url: "https://scholar.google.com/citations?user=eZWXOqYAAAAJ",
    },
    xindiShang: {
        name: "Xindi Shang",
        url: "https://xdshang.github.io/",
    },
    zehuanYuan: {
        name: "Zehuan Yuan",
        url: "https://shallowyuan.github.io/",
    },
};

const PUBLICATIONS = [
    {
        id: "foo2026physical",
        thumbnail: {
            src: psivgThumbnail,
            alt: "PSIVG comparison showing a simulated bowling ball collision",
        },
        title: "Physical Simulator In-the-Loop Video Generation",
        authors: [
            AUTHORS.linGengFoo,
            AUTHORS.markHeHuang,
            AUTHORS.alexandrosLattas,
            AUTHORS.stylianosMoschoglou,
            AUTHORS.thaboBeeler,
            AUTHORS.christianTheobalt,
        ],
        venue: "CVPR 2026",
        links: {
            project: "https://vcai.mpi-inf.mpg.de/projects/PSIVG/",
            code: "https://github.com/MarkHershey/PSIVG",
            "arXiv:2603.06408": "https://arxiv.org/abs/2603.06408",
        },
        citation: `@article{foo2026physical,
  title={Physical Simulator In-the-Loop Video Generation},
  author={Foo, Lin Geng and Huang, Mark He and Lattas, Alexandros and Moschoglou, Stylianos and Beeler, Thabo and Theobalt, Christian},
  journal={arXiv preprint arXiv:2603.06408},
  year={2026}
}`,
    },
    {
        id: "huang2025onlinesplatter",
        thumbnail: {
            src: onlineSplatterThumbnail,
            alt: "OnlineSplatter reconstructing a handheld camera from a stream of RGB views",
        },
        title: "OnlineSplatter: Pose-Free Online 3D Reconstruction for Free-Moving Objects",
        authors: [
            AUTHORS.markHeHuang,
            AUTHORS.linGengFoo,
            AUTHORS.christianTheobalt,
            AUTHORS.yingSun,
            AUTHORS.deWenSoh,
        ],
        venue: "NeurIPS 2025 (Spotlight)",
        links: {
            project: "https://markhh.com/OnlineSplatter/",
            "arXiv:2510.20605": "https://arxiv.org/abs/2510.20605",
        },
        citation: `@article{huang2025onlinesplatter,
  title={OnlineSplatter: Pose-Free Online 3D Reconstruction for Free-Moving Objects},
  author={Huang, Mark He and Foo, Lin Geng and Theobalt, Christian and Sun, Ying and Soh, De Wen},
  journal={arXiv preprint arXiv:2510.20605},
  year={2025}
}`,
    },
    {
        id: "huang2024learning",
        thumbnail: {
            src: learningToUnlearnThumbnail,
            alt: "Learning-to-Unlearn meta-optimization and gradient harmonization pipeline",
        },
        title: "Learning to Unlearn for Robust Machine Unlearning",
        authors: [
            AUTHORS.markHeHuang,
            AUTHORS.linGengFoo,
            AUTHORS.junLiu,
        ],
        venue: "ECCV 2024",
        links: {
            paper: "https://arxiv.org/abs/2407.10494",
            "arXiv:2407.10494": "https://arxiv.org/abs/2407.10494",
        },
        citation: `@inproceedings{huang2024learning,
  title={Learning to Unlearn for Robust Machine Unlearning},
  author={Huang, Mark He and Foo, Lin Geng and Liu, Jun},
  booktitle={European Conference on Computer Vision},
  year={2024},
  organization={Springer}
}`,
    },
    {
        id: "xu2023meta",
        thumbnail: {
            src: mcresThumbnail,
            alt: "MCRES example contrasting learned concepts with a novel test-time composition",
        },
        title: "Meta Compositional Referring Expression Segmentation",
        authors: [
            AUTHORS.liXu,
            AUTHORS.markHeHuang,
            AUTHORS.xindiShang,
            AUTHORS.zehuanYuan,
            AUTHORS.yingSun,
            AUTHORS.junLiu,
        ],
        venue: "CVPR 2023",
        links: {
            paper: "https://openaccess.thecvf.com/content/CVPR2023/html/Xu_Meta_Compositional_Referring_Expression_Segmentation_CVPR_2023_paper.html",
            "arXiv:2304.04415": "https://arxiv.org/abs/2304.04415",
        },
        citation: `@inproceedings{xu2023meta,
  title={Meta Compositional Referring Expression Segmentation},
  author={Xu, Li and Huang, Mark He and Shang, Xindi and Yuan, Zehuan and Sun, Ying and Liu, Jun},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={19478--19487},
  year={2023}
}`,
    },
    {
        id: "xu2021sutd",
        thumbnail: {
            src: trafficQaThumbnail,
            alt: "SUTD-TrafficQA example with traffic frames and causal reasoning questions",
        },
        title: "SUTD-TrafficQA: A Question Answering Benchmark and an Efficient Network for Video Reasoning over Traffic Events",
        authors: [
            AUTHORS.liXu,
            { ...AUTHORS.markHeHuang, name: "He Huang" },
            AUTHORS.junLiu,
        ],
        venue: "CVPR 2021",
        links: {
            paper: "https://openaccess.thecvf.com/content/CVPR2021/html/Xu_SUTD-TrafficQA_A_Question_Answering_Benchmark_and_an_Efficient_Network_for_CVPR_2021_paper.html",
            dataset: "https://github.com/SUTDCV/SUTD-TrafficQA",
            "arXiv:2103.15538": "https://arxiv.org/abs/2103.15538",
        },
        citation: `@inproceedings{xu2021sutd,
  title={SUTD-TrafficQA: A Question Answering Benchmark and an Efficient Network for Video Reasoning over Traffic Events},
  author={Xu, Li and Huang, He and Liu, Jun},
  booktitle={Proceedings of the IEEE/CVF conference on computer vision and pattern recognition},
  pages={9878--9888},
  year={2021}
}`,
    },
];

export default PUBLICATIONS;
