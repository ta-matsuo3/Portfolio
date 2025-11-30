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
        skills: ['js', 'html', 'css',],
        others: ['GSAP',],
        type: 'animation',
        desc: `
        準備中 準備中 準備中 準備中 準備中                                            `,
        Notes: '',
        period: '',
        figma: '',
        github: '',
        target: 'なし',
        concept: 'なし',
    },
    {
        title: "架空のTVゲームのサイト",
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
        desc: `
        Figmaで作成した自作カンプを忠実に再現した実習作品。

            ペルソナやコンセプトの設定>デザイン>レビュー>調整の一連の流れを初めて体験。
            （デザイン/カンプ作成で5日）

            動きのあるサイトを目指していたが、全て実装すると期日超過しそうだったので、優先度の低い機能（ロード画面）などは実装を断念した。
            
            ※各種画像は生成AIを使用`,
        Notes: '',
        period: '10日',
        figma: 'https://www.figma.com/design/6GKtuP8sajb5RXPttHYw8l/%E6%8E%88%E6%A5%ADLP?node-id=0-1&p=f&t=JwWunWVNTfz6p9p1-0',
        github: 'https://github.com/ta-matsuo3/Portfolio',
        target: 'ゲーム好きの男子中高生',
        concept: 'コアゲーマーへの第一歩',
    },
    {
        title: "ゲームのプラットフォーム",
        url: "https://ta-matsuo3.github.io/2025_10_fictional_LP/platform.html",
        image: platform,
        productionDate: {
            year: 2025,
            month: 10,
            day: 17,
        },
        skills: ['html', 'css', 'js',],
        type: 'site',
        desc: `
        「架空のTVゲームのホームページ」と同時並行で作成した、販売用プラットフォームサイト。

        既存のプラットフォームを忠実に再現。
        `,
        Notes: '',
        period: '',
        figma: 'https://www.figma.com/design/6GKtuP8sajb5RXPttHYw8l/%E6%8E%88%E6%A5%ADLP?node-id=0-1&p=f&t=JwWunWVNTfz6p9p1-0',
        github: 'https://github.com/ta-matsuo3/Portfolio',
        target: '全年齢',
        concept: '既存サイトのクローン',
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
        type: 'site',
        desc: `
        Reactで初めて作成したブログサイト。

        デザインカンプは事前に用意されているものを使用した。

        MUIやリストのレンダー、フォームなどReact特有の記述を組み込んでいる。

        `,
        Notes: '',
        period: '１日',
        figma: 'https://www.figma.com/design/OawHQgS1FknF67tsevfNJZ/React%E8%AA%B2%E9%A1%8C_Blog%E3%82%B5%E3%82%A4%E3%83%88?node-id=0-1&p=f&t=EhPke6CWMwpckTAp-0',
        github: 'https://github.com/ta-matsuo3/reactBlogSite',
        target: '',
        concept: '',
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
        type: 'site',
        desc: `
        htmlとcssの学習過程が完了した後、お盆休み中に作成。
        課題の内容としては「夏休みの日記」だったため、絵日記モチーフにした。

        ただの絵日記だとつまらないと感じ、お盆前に先生にお勧めされたGSAPを使って、日記を横方向にスライドさせてみた。
        訓練初期（1ヵ月目程度）の作品にしてはよくできているので気に入っている。
        この時点ではfigmaの操作方法を習っていなかったので、カンプなし。
        
        `,
        Notes: '',
        period: '5日',
        figma: '',
        github: 'https://github.com/ta-matsuo3/bon_diary',
        target: '',
        concept: '大人の絵日記',
    },
    {
        title: "PokemonGuesser",
        url: "https://ta-matsuo3.github.io/PokemonGuesser/",
        image: pokemon,
        productionDate: {
            year: 2025,
            month: 10,
            day: 1
        },
        skills: ['html', 'css', 'js',],
        type: 'app',
        desc: `
        「実際にAPIを使って好きなものを作る実習」の作品。

        アキネイターに着想を得て、モンスターの情報をすこしづつ当てていくゲームに決定。
        作りながら具体的な実装内容を固めていったため、途中からfigmaでタスク管理を行いながら進行。

        いきなり最新作のモンスター名をいれると数分待たされるので、初代作品から徐々に世代を上げていくようにすると比較的スムーズに進行できる。

        友人から好評。
        `,
        Notes: '',
        period: '5日',
        figma: 'https://www.figma.com/design/znvN8HvbaA7TGMcaKweW0j/%E7%84%A1%E9%A1%8C?t=kVhIa2vjLtmJVK7k-0',
        github: 'https://github.com/ta-matsuo3/PokemonGuesser',
        target: '',
        concept: 'APIでゲームを作る',
    }
]

export default worksList;