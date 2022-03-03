const posts = [
  {
    type: 'Featured',
    data: [
      {
        _id: '62167d46b6a65dfa78d79653',
        index: 0,
        title: 'Lorem adipisicing aliquip consectetur culpa',
        picture:
          'https://images.unsplash.com/photo-1643400814735-6a84debec01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NTY0Njg5MA&ixlib=rb-1.2.1&q=80&w=1080',
        author: 'Brady Grant',
        subtitle:
          'ex exercitation enim ex id est dolor irure consectetur magna nulla nostrud veniam in consequat',
        content:
          'Lorem amet ad sunt voluptate consequat duis. Consectetur elit est labore voluptate cupidatat esse in adipisicing consectetur non adipisicing. Cillum duis veniam non id deserunt pariatur deserunt id voluptate elit nostrud irure amet. Eu laborum ullamco irure eu est amet do. Enim eiusmod ullamco mollit et dolor quis anim incididunt nisi. Aliqua voluptate pariatur ut id amet cillum adipisicing adipisicing aliqua sunt. Proident fugiat occaecat sit qui et est aliqua enim occaecat amet enim.\r\n',
        postDate: '2020-01-17T10:55:39 -04:00',
        isFeatured: true,
        isPopular: false,
        isTrending: false,
        tags: [
          'exercitation',
          'deserunt',
          'minim',
          'eu',
          'cupidatat',
          'reprehenderit',
          'ex',
        ],
      },
      {
        _id: '62167d4673f5ec9270e7c62a',
        index: 1,
        title: 'pariatur dolore culpa cillum ullamco',
        picture:
          'https://images.unsplash.com/photo-1644520963957-c454fee1e81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NTY0NjkzOQ&ixlib=rb-1.2.1&q=80&w=1080',
        author: 'Hughes Shepherd',
        subtitle:
          'magna nostrud in deserunt ex est mollit eiusmod esse proident excepteur sunt ex non anim',
        content:
          'Deserunt do duis cillum ea. Consectetur amet cillum et ut eiusmod fugiat occaecat cillum Lorem. Consequat minim mollit est ex tempor sint minim. Veniam do veniam consequat ullamco.\r\n',
        postDate: '2022-02-12T12:50:59 -04:00',
        isFeatured: false,
        isPopular: true,
        isTrending: false,
        tags: ['sint', 'excepteur', 'eu', 'fugiat', 'mollit', 'ea', 'est'],
      },
      {
        _id: '62167d46fb888f6560b65f7f',
        index: 2,
        title: 'laborum ea occaecat eu exercitation',
        picture:
          'https://images.unsplash.com/photo-1644843521783-0ec482c535c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NTY0Njc4NQ&ixlib=rb-1.2.1&q=80&w=1080',
        author: 'Angie Prince',
        subtitle:
          'adipisicing reprehenderit nostrud excepteur non commodo aliquip non non nostrud enim pariatur laborum sunt nisi',
        content:
          'Nostrud amet amet esse pariatur. Magna in aliqua in dolor excepteur sunt mollit culpa tempor Lorem velit est consectetur. Laboris aliqua id fugiat qui qui incididunt.\r\n',
        postDate: '2014-02-15T08:52:43 -04:00',
        isFeatured: true,
        isPopular: false,
        isTrending: false,
        tags: [
          'duis',
          'pariatur',
          'enim',
          'ullamco',
          'nulla',
          'tempor',
          'dolore',
        ],
      },
      {
        _id: '62167d46dc7147cb51d63e58',
        index: 3,
        title: 'tempor sit ea Lorem minim',
        picture:
          'https://images.unsplash.com/photo-1643695645036-fd966acfe565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NTY0NzA0MQ&ixlib=rb-1.2.1&q=80&w=1080',
        author: 'Alvarez Peterson',
        subtitle:
          'proident quis laborum non reprehenderit magna non cupidatat Lorem id esse dolore anim aliqua elit',
        content:
          'Adipisicing consequat pariatur mollit aliquip dolor ipsum anim do culpa laboris dolore. Amet eiusmod dolore id occaecat est elit consectetur elit ad proident esse et proident elit. Reprehenderit quis labore ipsum eiusmod quis nostrud commodo laborum est in do eu reprehenderit cillum. Enim id laborum quis irure est irure officia culpa incididunt. Irure irure dolor commodo sit voluptate pariatur voluptate reprehenderit amet.\r\n',
        postDate: '2015-11-03T08:48:43 -04:00',
        isFeatured: false,
        isPopular: false,
        isTrending: true,
        tags: ['culpa', 'id', 'minim', 'deserunt', 'dolor', 'mollit', 'aliqua'],
      },
      {
        _id: '62167d46d7aff8d6a7e10ff0',
        index: 4,
        title: 'ut eu nisi enim minim',
        picture:
          'https://images.unsplash.com/photo-1643049441030-ecbda8e7a962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NTY0NzE1Ng&ixlib=rb-1.2.1&q=80&w=1080',
        author: 'Puckett Vega',
        subtitle:
          'nisi dolore ipsum ad cupidatat ipsum non eu mollit quis irure incididunt enim culpa reprehenderit',
        content:
          'Duis reprehenderit enim consectetur minim ea in reprehenderit. Tempor sunt ex irure sunt eiusmod adipisicing minim exercitation sint dolore elit ex. Labore est aute nisi nisi Lorem ad fugiat enim laborum amet qui ad ullamco ex. Aute ut consectetur id commodo ullamco voluptate sint exercitation ullamco sunt.\r\n',
        postDate: '2015-05-11T09:33:41 -04:00',
        isFeatured: false,
        isPopular: true,
        isTrending: false,
        tags: [
          'est',
          'voluptate',
          'non',
          'amet',
          'pariatur',
          'commodo',
          'magna',
        ],
      },
      {
        _id: '62167d46f702e0cb5f4e5b17',
        index: 5,
        title: 'incididunt fugiat nostrud dolor pariatur',
        picture:
          'https://images.unsplash.com/photo-1644826734737-f2f26e45ab54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NTY0NzE5Mw&ixlib=rb-1.2.1&q=80&w=1080',
        author: 'Soto Mack',
        subtitle:
          'non amet labore exercitation consequat proident laborum consequat tempor non officia culpa deserunt nostrud labore',
        content:
          'Enim nisi eiusmod fugiat ipsum id. Ad commodo ea do ea tempor magna reprehenderit laborum velit tempor. Lorem reprehenderit ullamco labore excepteur veniam duis voluptate.\r\n',
        postDate: '2020-04-18T01:58:40 -04:00',
        isFeatured: false,
        isPopular: false,
        isTrending: true,
        tags: [
          'sit',
          'non',
          'consequat',
          'consequat',
          'sint',
          'anim',
          'exercitation',
        ],
      },
    ],
  },
  {
    type: 'Popular',
    data: [
      {
        _id: '62168217bb8c47b6da6bcc8c',
        index: 0,
        title: 'commodo ullamco nisi mollit et',
        picture: 'https://source.unsplash.com/random',
        author: 'Kathryn Walters',
        subtitle:
          'enim non esse laboris duis aliquip do incididunt reprehenderit adipisicing aliquip sint officia cillum nisi',
        content:
          'Id sunt anim culpa pariatur cillum irure culpa id. Aliquip laborum aliqua adipisicing voluptate fugiat est aliqua eu eu et. Enim labore nisi proident incididunt laborum cillum eu ad id esse ipsum mollit ad.\r\n',
        postDate: '2016-06-30T05:59:35 -04:00',
        tags: [
          'consequat',
          'reprehenderit',
          'culpa',
          'nostrud',
          'proident',
          'cupidatat',
          'adipisicing',
        ],
      },
      {
        _id: '621682173c50500bf7c45090',
        index: 1,
        title: 'consectetur do adipisicing commodo do',
        picture: 'https://source.unsplash.com/random',
        author: 'Buckner Ward',
        subtitle:
          'minim enim officia voluptate adipisicing id ex qui minim adipisicing culpa laboris ipsum sit ex',
        content:
          'Anim velit aliquip qui adipisicing. Esse incididunt enim nisi dolore labore cupidatat Lorem aute. Elit sit sit sit ea id excepteur elit deserunt esse velit dolore ad minim culpa.\r\n',
        postDate: '2021-09-05T06:01:52 -04:00',
        tags: ['in', 'nulla', 'pariatur', 'esse', 'id', 'est', 'eu'],
      },
      {
        _id: '62168217354ec0399bd1e594',
        index: 2,
        title: 'deserunt pariatur magna ipsum velit',
        picture: 'https://source.unsplash.com/random',
        author: 'Harper Pacheco',
        subtitle:
          'nisi excepteur sint eu nisi duis voluptate proident aliqua ad ut consequat nostrud laborum irure',
        content:
          'Cupidatat tempor irure irure labore eu. Reprehenderit consequat eu excepteur nostrud. Nisi adipisicing ipsum ut occaecat commodo amet sint.\r\n',
        postDate: '2019-08-18T09:23:01 -04:00',
        tags: [
          'exercitation',
          'aliquip',
          'culpa',
          'in',
          'sunt',
          'quis',
          'incididunt',
        ],
      },
      {
        _id: '621682179101467f25a206b8',
        index: 3,
        title: 'sint sunt veniam culpa ipsum',
        picture: 'https://source.unsplash.com/random',
        author: 'Berry Lancaster',
        subtitle:
          'cillum anim aliqua aute non mollit eu dolore aliqua officia id deserunt veniam labore proident',
        content:
          'Elit proident est commodo cillum aute. Tempor et ad quis sunt anim eiusmod ullamco sunt Lorem dolore deserunt occaecat. Enim deserunt aliquip minim ut proident eiusmod voluptate enim proident tempor in amet est. Incididunt duis minim aliqua deserunt ex enim amet consequat reprehenderit minim voluptate et mollit qui. Culpa minim labore consequat tempor incididunt esse eu labore ad irure cupidatat excepteur.\r\n',
        postDate: '2017-06-27T03:45:43 -04:00',
        tags: ['qui', 'fugiat', 'eu', 'velit', 'ullamco', 'quis', 'est'],
      },
      {
        _id: '62168217f238332f8643132b',
        index: 4,
        title: 'mollit incididunt sit ea esse',
        picture: 'https://source.unsplash.com/random',
        author: 'Preston Rodriguez',
        subtitle:
          'incididunt ut ex qui velit esse irure ea officia consequat ad laborum Lorem cillum sit',
        content:
          'Sit fugiat sint aliqua excepteur aute ut dolore. Ullamco minim fugiat anim elit minim. Esse anim occaecat aute reprehenderit labore voluptate voluptate eu exercitation. Qui ullamco ea culpa ad irure excepteur magna consequat consectetur nostrud voluptate cupidatat fugiat. Officia ea dolore eiusmod excepteur amet adipisicing consectetur proident sint mollit et excepteur incididunt.\r\n',
        postDate: '2022-02-17T11:50:56 -04:00',
        tags: [
          'consectetur',
          'velit',
          'dolore',
          'irure',
          'excepteur',
          'dolore',
          'veniam',
        ],
      },
      {
        _id: '62168217da7ca83b83a7fac7',
        index: 5,
        title: 'esse cupidatat fugiat proident minim',
        picture: 'https://source.unsplash.com/random',
        author: 'Munoz Perkins',
        subtitle:
          'Lorem qui do do fugiat ipsum mollit laborum amet adipisicing mollit consequat enim ea sit',
        content:
          'Veniam eu proident ex duis id occaecat sunt pariatur nisi. Ea magna ullamco in qui anim mollit. Exercitation officia cillum incididunt tempor sunt elit do sint sint non nostrud.\r\n',
        postDate: '2021-01-13T08:01:04 -04:00',
        tags: [
          'proident',
          'laboris',
          'laborum',
          'voluptate',
          'Lorem',
          'velit',
          'velit',
        ],
      },
    ],
  },
  {
    type: 'Trending',
    data: [
      {
        _id: '621682d87d185dffe5c4508d',
        index: 0,
        title: 'ut in excepteur laboris ex',
        picture: 'https://source.unsplash.com/random',
        author: 'Carlson Walls',
        subtitle:
          'dolore aliqua aute et dolore irure elit ut est dolore eu esse elit duis anim',
        content:
          'Elit sit pariatur ex aute est proident dolore. Ex qui veniam excepteur Lorem sunt excepteur. Aliquip magna culpa aute labore tempor dolore aute.\r\n',
        postDate: '2016-04-28T11:05:30 -04:00',
        tags: [
          'ea',
          'consectetur',
          'occaecat',
          'magna',
          'pariatur',
          'do',
          'incididunt',
        ],
      },
      {
        _id: '621682d84f7bd03651a1fa9d',
        index: 1,
        title: 'aute sit proident ullamco cillum',
        picture: 'https://source.unsplash.com/random',
        author: 'Ellis Blevins',
        subtitle:
          'consectetur non veniam reprehenderit ullamco amet quis sit esse qui ut officia occaecat Lorem exercitation',
        content:
          'Amet in eiusmod exercitation veniam non. Id ex dolor cupidatat enim eiusmod qui ullamco non. Eu qui est laboris laborum ea ut excepteur mollit excepteur dolore nulla velit. Id mollit cupidatat officia quis qui excepteur culpa minim nulla occaecat ullamco non. Sint exercitation labore ullamco et nostrud nostrud elit Lorem mollit. Anim ex deserunt sint velit ullamco proident proident sint aute enim ex. Ipsum duis esse ad dolor ea ipsum elit commodo.\r\n',
        postDate: '2021-03-31T03:50:41 -04:00',
        tags: ['labore', 'dolor', 'duis', 'ipsum', 'enim', 'enim', 'qui'],
      },
      {
        _id: '621682d89bf1b72fc87098f4',
        index: 2,
        title: 'sint amet amet non aute',
        picture: 'https://source.unsplash.com/random',
        author: 'Norma Crane',
        subtitle:
          'duis exercitation commodo ad enim duis aute nostrud reprehenderit nisi eiusmod ad nulla cupidatat consequat',
        content:
          'Excepteur magna ullamco in minim pariatur quis ad fugiat. Culpa amet eiusmod esse Lorem nostrud nisi tempor labore voluptate. Nisi irure dolor elit minim culpa officia.\r\n',
        postDate: '2021-04-01T11:00:10 -04:00',
        tags: [
          'nostrud',
          'labore',
          'ullamco',
          'et',
          'tempor',
          'sunt',
          'ullamco',
        ],
      },
      {
        _id: '621682d8ab158ef9c4d5e4d1',
        index: 3,
        title: 'deserunt occaecat id mollit minim',
        picture: 'https://source.unsplash.com/random',
        author: 'Dyer Galloway',
        subtitle:
          'irure dolore tempor et mollit anim sunt consectetur et reprehenderit sint eiusmod esse sit adipisicing',
        content:
          'Quis enim exercitation excepteur commodo non mollit fugiat ullamco anim ut. Duis duis aliquip nisi culpa laboris ex anim ad veniam elit aliqua occaecat qui. Ipsum anim laboris magna ullamco ut duis veniam.\r\n',
        postDate: '2020-08-15T08:08:18 -04:00',
        tags: [
          'voluptate',
          'do',
          'cillum',
          'reprehenderit',
          'amet',
          'velit',
          'id',
        ],
      },
      {
        _id: '621682d8c93ecd91c9e75239',
        index: 4,
        title: 'duis enim culpa irure elit',
        picture: 'https://source.unsplash.com/random',
        author: 'Johanna Brown',
        subtitle:
          'pariatur non laboris in voluptate fugiat voluptate aliqua ut velit mollit eiusmod fugiat qui non',
        content:
          'Reprehenderit sint do excepteur commodo laborum cillum est eu mollit qui pariatur sit. Proident qui sit ipsum veniam aliquip laboris. Quis aliquip elit occaecat anim. Quis laboris tempor pariatur ullamco. Mollit reprehenderit exercitation commodo cillum tempor magna labore. Est excepteur reprehenderit aliqua ut sint sunt ipsum excepteur adipisicing aliqua aliqua.\r\n',
        postDate: '2016-04-29T02:00:38 -04:00',
        tags: [
          'nisi',
          'aute',
          'exercitation',
          'veniam',
          'esse',
          'magna',
          'culpa',
        ],
      },
      {
        _id: '621682d809ad2c8fd517ac30',
        index: 5,
        title: 'incididunt anim amet tempor eiusmod',
        picture: 'https://source.unsplash.com/random',
        author: 'Boyd Harmon',
        subtitle:
          'nisi nostrud quis non excepteur aliqua ea qui labore exercitation pariatur veniam ex fugiat proident',
        content:
          'Consequat qui nisi deserunt aliquip anim deserunt enim ea voluptate laborum non. Irure consectetur sunt do cupidatat non qui magna ullamco anim culpa id sunt consectetur ad. Fugiat minim est cupidatat reprehenderit mollit enim voluptate laborum cupidatat sint culpa proident excepteur. Esse magna nostrud voluptate irure ullamco duis voluptate adipisicing sint dolor elit aliquip duis esse. Amet velit occaecat nulla nulla pariatur.\r\n',
        postDate: '2017-10-01T08:22:42 -04:00',
        tags: ['anim', 'consectetur', 'do', 'eu', 'ut', 'velit', 'ipsum'],
      },
    ],
  },
];

export default posts;
