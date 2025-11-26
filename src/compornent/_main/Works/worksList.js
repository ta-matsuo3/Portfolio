import platform from '../../../assets/platform.png'
import blog from '../../../assets/reactBlog.png'
import summer from '../../../assets/summer2.png'
import pokemon from '../../../assets/pokemonGuesser.png'
import comingSoon from '../../../assets/comingSoon.png'

const worksList = [
    {
        title: "準備中",
        url: "",
        image: comingSoon,
        productionDate: {
            year: 2025,
            month: 1,
            day: 1
        },
        program: ['javaScript', 'GSAP', 'html', 'css',],
        type: 'animation'
    },
    {
        title: "架空のTVゲームのホームページ",
        url: "https://ta-matsuo3.github.io/2025_10_fictional_LP/",
        image: "https://ta-matsuo3.github.io/2025_10_fictional_LP/images/platform/pkg.png",
        productionDate: {
            year: 2025,
            month: 10,
            day: 18
        },
        skills: ['html', 'css', 'js',],
        others: ['GSAP',],
        type: 'site',
        desc: 'Figmaで作成した自作カンプを忠実に再現し、サイトを構築した実習作品です。',
        Notes: '',
        period: '2週間（デザイン5日/コーディング5日）',
        figma: 'https://www.figma.com/design/6GKtuP8sajb5RXPttHYw8l/%E6%8E%88%E6%A5%ADLP?node-id=0-1&p=f&t=JwWunWVNTfz6p9p1-0',
        github: 'https://github.com/ta-matsuo3/Portfolio',
        target: '',
        concept: '',
    },
    {
        title: "架空のゲームプラットフォーム",
        url: "https://ta-matsuo3.github.io/2025_10_fictional_LP/platform.html",
        image: platform,
        productionDate: {
            year: 2025,
            month: 10,
            day: 17,
        },
        skills: ['html', 'css', 'js',],
        type: 'site'
    },
    {
        title: "架空のブログサイト",
        url: "https://ta-matsuo3.github.io/reactBlogSite/",
        image: blog,
        productionDate: {
            year: 2025,
            month: 11,
            day: 10
        },
        skills: ['html', 'css', 'js', 'react'],
        type: 'site'
    },
    {
        title: "夏休みの日記",
        url: "https://ta-matsuo3.github.io/bon_diary/diary.html",
        image: summer,
        productionDate: {
            year: 2025,
            month: 8,
            day: 17
        },
        skills: ['html', 'css', 'js',],
        type: 'site'
    },
    {
        title: "[ゲーム]PokemonGuesser",
        url: "https://ta-matsuo3.github.io/PokemonGuesser/",
        image: pokemon,
        productionDate: {
            year: 2025,
            month: 10,
            day: 1
        },
        skills: ['html', 'css', 'js',],
        type: 'app'
    }
]

export default worksList;