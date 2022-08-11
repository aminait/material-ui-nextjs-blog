const posts = [
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
    tags: ['duis', 'pariatur', 'enim', 'ullamco', 'nulla', 'tempor', 'dolore'],
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
    tags: ['est', 'voluptate', 'non', 'amet', 'pariatur', 'commodo', 'magna'],
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
];

export default posts;
