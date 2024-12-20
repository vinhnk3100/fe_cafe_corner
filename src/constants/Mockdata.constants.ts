import { CartProps } from "@/types/shop/cart.types";
import { PostProps } from "@/types/post/post.types";
import { CATEGORY_TYPE } from "./category-type.constants";
import { CafeChain, CafeProps } from "@/types/cafe/cafe.types";
import { LOCATION_CITY } from "./cafe-location.constant";
import { CafeCategoryProps } from "@/types/cafe/cafe-category.types";

export const dataCartTable: CartProps[] = [
  {
    id: "m5gr84i9",
    productName: "Caffe",
    productSize: "L",
    productAmount: 2,
    productPrice: 31600,
    productType: "drink",
  },
  {
    id: "3u1reuv4",
    productName: "Caffe",
    productSize: "L",
    productAmount: 2,
    productPrice: 242000,
    productType: "drink",
  },
  {
    id: "derv1ws0",
    productName: "Caffe",
    productSize: "L",
    productAmount: 2,
    productPrice: 83700,
    productType: "drink",
  },
  {
    id: "5kma53ae",
    productName: "Caffe",
    productSize: "L",
    productAmount: 1,
    productPrice: 8740,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 721000,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 72100,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 721000,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 72100,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 721000,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 72100,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 721000,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 72100,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 721000,
    productType: "drink",
  },
];

export const dataPost: PostProps[] = [
  {
    username: "username1",
    createDate: "5 giờ trước",
    postDetail: {
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d8ac999-99eb-4672-ae8b-0bf3193ad818_1600x1091.png",
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fyidefa3p63uovby4joxt.jpg",
        "https://png.pngtree.com/background/20210712/original/pngtree-realistic-abstract-background-design-picture-image_1178946.jpg",
      ],
    },
    postComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 5,
    totalDislike: 2,
    totalComment: 10,
    totalShare: 5,
  },
  {
    username: "username1",
    createDate: "5 giờ trước",
    postDetail: {
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d8ac999-99eb-4672-ae8b-0bf3193ad818_1600x1091.png",
      ],
    },
    postComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 5,
    totalDislike: 2,
    totalComment: 10,
    totalShare: 5,
  },
  {
    username: "username1",
    createDate: "5 giờ trước",
    postDetail: {
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d8ac999-99eb-4672-ae8b-0bf3193ad818_1600x1091.png",
        "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d8ac999-99eb-4672-ae8b-0bf3193ad818_1600x1091.png",
      ],
    },
    postComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 5,
    totalDislike: 2,
    totalComment: 10,
    totalShare: 5,
  },
];

export const dataCafe: CafeProps[] = [
  {
    id: "1",
    username: "username1",
    createDate: "5 giờ trước",
    cafeDetails: {
      title: "Phuc Long Cafe & Tea",
      phoneNumber: "23456789",
      cafeLogo:
        "https://upload.wikimedia.org/wikipedia/vi/thumb/3/32/Logo_Ph%C3%BAc_Long.svg/516px-Logo_Ph%C3%BAc_Long.svg.png?20240331120545",
      thumbnail:
        "https://doanhnghiephoinhap.vn/stores/news_dataimages/doanhnghiephoinhapvn/122022/09/02/phuc-long-dang-la-ga-de-trung-vang-cua-masan-26-.8287.jpg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/35379526_1724945860908379_3062394875564523520_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=i8-4I9QEaaIQ7kNvgFmx5x4&_nc_zt=23&_nc_ht=scontent.fhan3-3.fna&_nc_gid=A6zvV2Uy-F95FCOTSE7e3Ra&oh=00_AYCAK2c8pDt8BjzUfGtCVv-3Rf8Q4a1q40MQaJI7L4-6Hw&oe=6770F5BF",
        "https://scontent.fhan4-5.fna.fbcdn.net/v/t1.6435-9/35285824_1724945834241715_3263744514359033856_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UOf2Sp7JI3cQ7kNvgFstM3j&_nc_zt=23&_nc_ht=scontent.fhan4-5.fna&_nc_gid=Aeojyxc4lXC3jr3JVO-p12L&oh=00_AYBKw497VSI13hdjlOyyf5yaNiErjnat8g9FjU5DUyAVcA&oe=6770EB2C",
        "https://scontent.fhan4-5.fna.fbcdn.net/v/t1.6435-9/35358682_1724945750908390_5266540433667784704_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HIhZaP3_TSkQ7kNvgGIFix3&_nc_zt=23&_nc_ht=scontent.fhan4-5.fna&_nc_gid=AsWfGZqY7Y_cYCq7mBwmatI&oh=00_AYDutDEQU4njCPbgFO2Z9yNcwH10C_lWbMgWyPLsqqROkQ&oe=6770E5D6",
        "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/35298487_1724945627575069_8546917007017115648_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hJ2teQS17kYQ7kNvgFxKuCh&_nc_zt=23&_nc_ht=scontent.fhan3-2.fna&_nc_gid=Afy2q4o_8F8jUxsX8Zbk3Ff&oh=00_AYCH7n4MSLmGIfQ7Jaqyy9ytVfi5G1NKr6quk6Wr-98wLg&oe=6770E091",
      ],
      cafeChain: {
        id: "1",
        cafeChainName: "Classic Coffee",
        cafeChainLogo:
          "https://classiccoffee.com.vn/upload/wReSW5ndQPLungnaissmgS0X29HkibEP2TH.png",
      },
      cafeOperation: {
        openingTime: "07:30",
        closingTime: "22:00",
        openingDay: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      cafeLocation: {
        city: LOCATION_CITY.HOCHIMINH,
        houseNumber: "1B-1B1",
        street: "Cộng Hoà",
        district: "Tân Bình",
        ward: "4",
      },
      cafeCategory: [
        {
          id: "1",
          cafeCategoryName: "study",
        },
        {
          id: "2",
          cafeCategoryName: "space",
        },
      ],
      cafeTheme: {
        primaryColor: "green",
        secondaryColor: "white",
      },
    },
    cafeComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 645789,
    totalDislike: 2,
    totalComment: 10,
    totalShare: 5,
    isTodayMenu: true,
    isOnPromotion: true,
    isHoldingEvents: true,
    isCOTY: false,
    isRecommendedByPeople: 180,
  },
  {
    id: "2",
    username: "username1",
    createDate: "10 giờ trước",
    cafeDetails: {
      title: "Katinat Saigon Kafe",
      phoneNumber: "23456789",
      thumbnail: "https://mkt.1cdn.vn/2023/06/29/katinat.jpeg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/35379526_1724945860908379_3062394875564523520_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=i8-4I9QEaaIQ7kNvgFmx5x4&_nc_zt=23&_nc_ht=scontent.fhan3-3.fna&_nc_gid=A6zvV2Uy-F95FCOTSE7e3Ra&oh=00_AYCAK2c8pDt8BjzUfGtCVv-3Rf8Q4a1q40MQaJI7L4-6Hw&oe=6770F5BF",
        "https://scontent.fhan4-5.fna.fbcdn.net/v/t1.6435-9/35285824_1724945834241715_3263744514359033856_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UOf2Sp7JI3cQ7kNvgFstM3j&_nc_zt=23&_nc_ht=scontent.fhan4-5.fna&_nc_gid=Aeojyxc4lXC3jr3JVO-p12L&oh=00_AYBKw497VSI13hdjlOyyf5yaNiErjnat8g9FjU5DUyAVcA&oe=6770EB2C",
      ],
      cafeLogo:
        "https://cdn.haitrieu.com/wp-content/uploads/2022/06/logo-katinat-text.png",
      cafeOperation: {
        openingTime: "07:30",
        closingTime: "22:00",
        openingDay: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      cafeLocation: {
        city: LOCATION_CITY.HOCHIMINH,
        houseNumber: "533",
        street: "Nguyễn Tri Phương",
        district: "10",
        ward: "8",
      },
      cafeCategory: [
        {
          id: "1",
          cafeCategoryName: "Study",
        },
        {
          id: "2",
          cafeCategoryName: "space",
        },
        {
          id: "3",
          cafeCategoryName: "cozy",
        },
      ],
      cafeTheme: {
        primaryColor: "#3b82f6",
        secondaryColor: "yellow",
      },
    },
    cafeComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 15056325,
    totalDislike: 2,
    totalComment: 10,
    totalShare: 5,
    isTodayMenu: false,
    isOnPromotion: true,
    isHoldingEvents: false,
    isCOTY: false,
    isRecommendedByPeople: 100,
  },
  {
    id: "3",
    username: "username1",
    createDate: "10 giờ trước",
    cafeDetails: {
      title: "The Cafe House",
      phoneNumber: "23456789",
      thumbnail:
        "https://file.hstatic.net/1000075078/file/hcm-to-ngoc-van1_980973528ceb4b968f3e56efd0d54bc4.jpg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://file.hstatic.net/1000075078/file/hcm-to-ngoc-van2_c926f060794e4b7b889392fbf3f7a98a.jpg",
        "https://file.hstatic.net/1000075078/file/hcm-to-ngoc-van3_7629d26087d942e78f8e09f0cca148f4.jpg",
        "https://file.hstatic.net/1000075078/file/hcm-to-ngoc-van4_8661e3426ba1471fbbd04042f4ce58af.jpg",
        "https://file.hstatic.net/1000075078/file/hcm-to-ngoc-van6_0b450ced0b0d4b4083fcbee86e8bc71a.jpg",
      ],
      cafeLogo:
        "https://classiccoffee.com.vn/upload/ko2DsezaYOBouasrKep4kVWOVxxmmflGEnk.jpg",
      cafeOperation: {
        openingTime: "07:30",
        closingTime: "22:00",
        openingDay: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      cafeLocation: {
        city: LOCATION_CITY.THUDUC,
        houseNumber: "116",
        street: "Tô Ngọc Vân",
        district: "",
        ward: "Linh Tây",
      },
      cafeCategory: [
        {
          id: "1",
          cafeCategoryName: "study",
        },
        {
          id: "2",
          cafeCategoryName: "space",
        },
        {
          id: "3",
          cafeCategoryName: "cozy",
        },
        {
          id: "4",
          cafeCategoryName: "Overnight",
        },
        {
          id: "5",
          cafeCategoryName: "Rooftop",
        },
        {
          id: "6",
          cafeCategoryName: "cozy",
        },
        {
          id: "7",
          cafeCategoryName: "cozy",
        },
      ],
      cafeTheme: {
        primaryColor: "#d5b026",
        secondaryColor: "black",
      },
    },
    cafeComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 999,
    totalDislike: 315,
    totalComment: 10,
    totalShare: 5,
    isTodayMenu: false,
    isOnPromotion: true,
    isHoldingEvents: true,
    isCOTY: false,
    isRecommendedByPeople: 100,
  },
  {
    id: "4",
    username: "username1",
    createDate: "10 giờ trước",
    cafeDetails: {
      title: "Highlands Cafe",
      phoneNumber: "23456789",
      thumbnail:
        "https://phucthanhan.com.vn/wp-content/uploads/2024/02/highland-scaled.jpg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      cafeLogo:
        "https://download.logo.wine/logo/Highlands_Coffee/Highlands_Coffee-Logo.wine.png",
      contentImg: [
        "https://lh3.googleusercontent.com/p/AF1QipPTZ5G91BKLNSK9H9xPDqcOGax-IP6LdfKtAdk_=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipMuXB2TNdDSwwu2HOztWbIaveBX9hOY2BrCUEw_=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipMFjFZxp4Po-LCfsLIl9VcTjq0vtsedey4fz_4=s680-w680-h510",
      ],
      cafeOperation: {
        openingTime: "07:30",
        closingTime: "22:00",
        openingDay: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      cafeLocation: {
        city: LOCATION_CITY.HOCHIMINH,
        houseNumber: "210",
        street: "Đ. Nguyễn Trãi",
        district: "1",
        ward: "Phạm Ngũ Lão",
      },
      cafeCategory: [
        {
          id: "1",
          cafeCategoryName: "study",
        },
        {
          id: "2",
          cafeCategoryName: "space",
        },
        {
          id: "3",
          cafeCategoryName: "cozy",
        },
      ],
      cafeTheme: {
        primaryColor: "#be964c",
        secondaryColor: "black",
      },
    },
    cafeComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 7463235,
    totalDislike: 1062132,
    totalComment: 10,
    totalShare: 5,
    isTodayMenu: false,
    isOnPromotion: false,
    isHoldingEvents: false,
    isCOTY: true,
    isRecommendedByPeople: 80,
  },
  {
    id: "5",
    username: "username1",
    createDate: "10 giờ trước",
    cafeDetails: {
      title: "Trung Nguyên Legend Café",
      phoneNumber: "23456789",
      thumbnail:
        "https://thietkecafedep.com.vn/upload/images/thi-cong-noi-that/coffee/he-thong-trung-nguyen/12-Alexandre-de-Rhodes-Ben-Nghe-Quan-1/noi-that-quan-cafe-trung-nguyen-legend-12-alexandre-de-rhodes-quan-1-35.jpg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://lh3.googleusercontent.com/p/AF1QipNMyu8TO-bOR95gnlznYPH16fWw2EiqeqdpkMUb=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipPQfQ7Va3yU_hCVyI6KLK4t-itDYLNybmpgVNv1=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipNxDl6VCFRxJY5OiblLxKvepv_ndC11GZIIAjKV=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipN2Q3NWjPAH9rRqASuxfWdqQ7jFELBRu6D2uidO=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipOc4r0nDAaQQ1T3GD6FhxAkTnUUZDmexQCy8-s-=s680-w680-h510",
      ],
      cafeLogo:
        "https://thietkelogo.vn/wp-content/uploads/2016/03/logo-cf-trung-nguyen.png",
      cafeOperation: {
        openingTime: "07:30",
        closingTime: "22:00",
        openingDay: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      cafeLocation: {
        city: LOCATION_CITY.HOCHIMINH,
        houseNumber: "166 -117 -118",
        street: "Đ. Bãi Sậy",
        district: "6",
        ward: "1",
      },
      cafeCategory: [
        {
          id: "1",
          cafeCategoryName: "study",
        },
        {
          id: "2",
          cafeCategoryName: "space",
        },
        {
          id: "3",
          cafeCategoryName: "cozy",
        },
      ],
      cafeTheme: {
        primaryColor: "gray",
        secondaryColor: "black",
      },
    },
    cafeComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 6953,
    totalDislike: 200,
    totalComment: 10,
    totalShare: 5,
    isTodayMenu: false,
    isOnPromotion: true,
    isHoldingEvents: false,
    isCOTY: false,
    isRecommendedByPeople: 50,
  },
  {
    id: "6",
    username: "username1",
    createDate: "10 giờ trước",
    cafeDetails: {
      title: "Starbucks Nguyen Hue",
      phoneNumber: "23456789",
      thumbnail:
        "https://danangfantasticity.com/wp-content/uploads/2024/10/starbucks-bach-dang-da-nang-03.jpg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://lh3.googleusercontent.com/p/AF1QipODm9K7nremADzCj7Dk09MnkDtmfll8KZC5jvJf=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipOaaIrBp2J3UOdeKeqDyxnG5crmCwHqYUKWiFB9=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipMR_TsQSYcFVR1t5veKf09HxW_HzHg9vl9m2iCc=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipMWzv4uZ5jPL2KUgjXEPEgZJX-SWC1-f5OVAt9O=s680-w680-h510",
      ],
      cafeLogo:
        "https://cdn.freebiesupply.com/logos/large/2x/starbucks-coffee-logo-png-transparent.png",
      cafeOperation: {
        openingTime: "06:30",
        closingTime: "22:00",
        openingDay: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      cafeLocation: {
        city: LOCATION_CITY.HOCHIMINH,
        houseNumber: "99",
        street: " Nguyễn Huệ",
        district: "1",
        ward: "Bến Nghé",
      },
      cafeCategory: [
        {
          id: "1",
          cafeCategoryName: "study",
        },
        {
          id: "2",
          cafeCategoryName: "space",
        },
        {
          id: "3",
          cafeCategoryName: "cozy",
        },
      ],
      cafeTheme: {
        primaryColor: "#006241",
        secondaryColor: "black",
      },
    },
    cafeComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 9010603,
    totalDislike: 2,
    totalComment: 10,
    totalShare: 5,
    isTodayMenu: false,
    isOnPromotion: true,
    isHoldingEvents: false,
    isCOTY: false,
    isRecommendedByPeople: 100,
  },
  {
    id: "7",
    username: "username1",
    createDate: "10 giờ trước",
    cafeDetails: {
      title: "Cà phê muối Chú Long",
      phoneNumber: "123456789",
      thumbnail:
        "https://lh3.googleusercontent.com/proxy/ahngoLW8UZFvZa5horw5lwivKVqSjb8AQiNvqMHIZjyFFFMwJt3vaUMTYEyJwC28utrUmJdVH2wKSfkZjhUn02ccf2NwWkh94Mci4c0tRRiqy6cRgLSl9gZfN1PBhMc7VtHPtZ1QEtqYmQ",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [],
      cafeLogo:
        "https://cdn.freebiesupply.com/logos/large/2x/starbucks-coffee-logo-png-transparent.png",
      cafeOperation: {
        openingTime: "06:30",
        closingTime: "22:00",
        openingDay: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      cafeLocation: {
        city: LOCATION_CITY.HOCHIMINH,
        houseNumber: "301",
        street: " Nguyễn Đình Chiểu",
        district: "3",
        ward: "5",
      },
      cafeCategory: [
        {
          id: "2",
          cafeCategoryName: "Cozy",
        },
        {
          id: "3",
          cafeCategoryName: "Space",
        },
        {
          id: "8",
          cafeCategoryName: "Cityview",
        },
      ],
      cafeTheme: {
        primaryColor: "#006241",
        secondaryColor: "black",
      },
    },
    cafeComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 1254235,
    totalDislike: 2,
    totalComment: 10,
    totalShare: 5,
    isTodayMenu: false,
    isOnPromotion: true,
    isHoldingEvents: false,
    isCOTY: false,
    isRecommendedByPeople: 100,
  },
  {
    id: "8",
    username: "username1",
    createDate: "10 giờ trước",
    cafeDetails: {
      title: "Cộng Cà Phê",
      phoneNumber: "123456789",
      thumbnail:
        "https://scontent.fhan4-6.fna.fbcdn.net/v/t1.6435-9/72527896_10157056181049005_6887466502836977664_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SjtFoz4XI2wQ7kNvgFiPuf5&_nc_oc=Adhlk8bEkhH63cxTDk9eoVxijon-qMT95ue0bqmuFGYMBeXuF7mT4mDr7Un4FgC4LQI&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=Ackus5k4mpaGgAxm8nDiV97&oh=00_AYAqBMo1fQtwLZJpLK9kt90ycxWQ9Mv3OBoQfCsXCj18Gg&oe=678C382F",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://lh3.googleusercontent.com/p/AF1QipMyroc8zhBI7fxgkiAayJC4gZU7MXOCQjIjl5qJ=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipMkhbva2dlNIZGb3D62KBq3AP9M17IZQPeGgzJj=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipOoexJ1G6Wb9jMol0E0Yk9062WlRGlfj-GVeikM=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipMekOMAfsgahgFa8X8gfJBRmRM9MCLQSC9-ymjz=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipM2FY_9mrq7qSgtiNb-Zuod2mjJviFKn-zhwN6h=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipM0JvTCEEFcoypGPc8JEb0-dJGC19-o4ftIRZB5=s680-w680-h510",
      ],
      cafeLogo:
        "https://cdn.haitrieu.com/wp-content/uploads/2022/03/Logo-Cong-Ca-Phe.png",
      cafeOperation: {
        openingTime: "08:30",
        closingTime: "23:00",
        openingDay: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      cafeLocation: {
        city: LOCATION_CITY.HOCHIMINH,
        houseNumber: "152",
        street: " Chợ Lớn",
        district: "6",
        ward: "11",
      },
      cafeCategory: [
        {
          id: "2",
          cafeCategoryName: "Cozy",
        },
        {
          id: "3",
          cafeCategoryName: "Space",
        },
        {
          id: "8",
          cafeCategoryName: "Cityview",
        },
      ],
      cafeTheme: {
        primaryColor: "#006241",
        secondaryColor: "black",
      },
    },
    cafeComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 12254235,
    totalDislike: 2,
    totalComment: 10,
    totalShare: 5,
    isTodayMenu: false,
    isOnPromotion: true,
    isHoldingEvents: false,
    isCOTY: false,
    isRecommendedByPeople: 100,
  },
  {
    id: "9",
    username: "username1",
    createDate: "10 giờ trước",
    cafeDetails: {
      title: "Three O'clock",
      phoneNumber: "123456789",
      thumbnail:
        "https://static.spacet.vn/image-resized/1024x10240_max/img/blog/2023-11-30/65685e03392db7810f956fd9.webp",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://annacoffee.vn/wp-content/uploads/2024/11/three1.jpeg",
        "https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/49783372_1035532876630145_6386143871209832448_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ek2OjyPgznkQ7kNvgFDbt1Y&_nc_oc=AdgMW74-MFIOGrZMZrMFexcU6uALyqoPWt9fQuZDYygpohILtI2nUqu91_rezaSlZ5E&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=APrm_URkWPn7KxBVTMXaacR&oh=00_AYBb60WlO-sETClKKUfqXN56_OHp0vVlFDWAlNpYNASSqA&oe=678C3EDA",
        "https://coffee.kayla.vn/wp-content/uploads/2024/06/three-oclock-1.jpg",
        "https://gcs.tripi.vn/public-tripi/tripi-feed/img/473794uPI/quan-cafe-quan-10-2.jpg",
      ],
      cafeLogo:
        "https://cdn.haitrieu.com/wp-content/uploads/2022/03/Logo-Cong-Ca-Phe.png",
      cafeOperation: {
        openingTime: "08:30",
        closingTime: "23:00",
        openingDay: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      cafeLocation: {
        city: LOCATION_CITY.HOCHIMINH,
        houseNumber: "152",
        street: " Chợ Lớn",
        district: "6",
        ward: "11",
      },
      cafeCategory: [
        {
          id: "2",
          cafeCategoryName: "Cozy",
        },
        {
          id: "3",
          cafeCategoryName: "Space",
        },
        {
          id: "8",
          cafeCategoryName: "Cityview",
        },
      ],
      cafeTheme: {
        primaryColor: "#006241",
        secondaryColor: "black",
      },
    },
    cafeComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 6254235,
    totalDislike: 2,
    totalComment: 10,
    totalShare: 5,
    isTodayMenu: false,
    isOnPromotion: true,
    isHoldingEvents: false,
    isCOTY: false,
    isRecommendedByPeople: 100,
  },
];

export const dataCafeCategory: CafeCategoryProps[] = [
  {
    id: "1",
    cafeCategoryName: "Study",
  },
  {
    id: "2",
    cafeCategoryName: "Cozy",
  },
  {
    id: "3",
    cafeCategoryName: "Space",
  },
  {
    id: "4",
    cafeCategoryName: "Music",
  },
  {
    id: "5",
    cafeCategoryName: "Overnight",
  },
  {
    id: "6",
    cafeCategoryName: "Rooftop",
  },
  {
    id: "7",
    cafeCategoryName: "Lakeview",
  },
  {
    id: "8",
    cafeCategoryName: "Cityview",
  },
  {
    id: "9",
    cafeCategoryName: "Reserve",
  },
  {
    id: "10",
    cafeCategoryName: "Decoration",
  },
];

export const dataCafeChain1: CafeChain[] = [
  {
    id: "1",
    cafeChainName: "Classic Coffee",
    cafeChainLogo:
      "https://classiccoffee.com.vn/upload/wReSW5ndQPLungnaissmgS0X29HkibEP2TH.png",
  },
  {
    id: "2",
    cafeChainName: "Trung Nguyên",
    cafeChainLogo:
      "https://thietkelogo.vn/wp-content/uploads/2016/03/logo-cf-trung-nguyen.png",
  },
  {
    id: "3",
    cafeChainName: "Highlands Coffee",
    cafeChainLogo:
      "https://cdn.haitrieu.com/wp-content/uploads/2022/03/Logo-HighLands-Coffee.png",
  },
  {
    id: "4",
    cafeChainName: "The Coffee House",
    cafeChainLogo:
      "https://classiccoffee.com.vn/upload/ko2DsezaYOBouasrKep4kVWOVxxmmflGEnk.jpg",
  },
  {
    id: "5",
    cafeChainName: "Phúc Long coffee & tea house",
    cafeChainLogo:
      "https://upload.wikimedia.org/wikipedia/vi/thumb/3/32/Logo_Ph%C3%BAc_Long.svg/2560px-Logo_Ph%C3%BAc_Long.svg.png",
  },
  {
    id: "6",
    cafeChainName: "Vinacafe",
    cafeChainLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Vinacaf%C3%A9_Logo.png/1200px-Vinacaf%C3%A9_Logo.png",
  },
  {
    id: "7",
    cafeChainName: "Cộng Cà Phê",
    cafeChainLogo:
      "https://www.cukcuk.vn/wp-content/uploads/2023/03/Cong-Ca-Phe-Logo-PNG-1-768x480.png",
  },
];

export const dataCafeChain2: CafeChain[] = [
  {
    id: "8",
    cafeChainName: "Katinat Kafe",
    cafeChainLogo:
      "https://cdn.haitrieu.com/wp-content/uploads/2022/06/logo-katinat-text.png",
  },
  {
    id: "9",
    cafeChainName: "Three O'Clock",
    cafeChainLogo:
      "https://threeoclock.vn/upload/news/85f239d2b1dd311ae3f4601301e00f68-1-5026.png",
  },
  {
    id: "10",
    cafeChainName: "Cheese Coffee",
    cafeChainLogo:
      "https://cdn.haitrieu.com/wp-content/uploads/2022/06/Logo-cheese-coffee-Blue.png",
  },
  {
    id: "11",
    cafeChainName: "The Coffee Club",
    cafeChainLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/The_Coffee_Club_logo.svg/1200px-The_Coffee_Club_logo.svg.png",
  },
  {
    id: "12",
    cafeChainName: "Coffee Corner",
    cafeChainLogo:
      "https://www.shutterstock.com/image-vector/cafe-corner-tes-logo-design-260nw-1974175163.jpg",
  },
  {
    id: "13",
    cafeChainName: "KUMO CHAN Coffee and Garden",
    cafeChainLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfoa2lukAR1GMjRWtQBhpqzlzmTpoauFvy-w&s",
  },
  {
    id: "14",
    cafeChainName: "An Tea & Coffee est. 2018",
    cafeChainLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7QSm8z7GN8pJDBqvGze4avcIIPKSz5Qn9mQ&s",
  },
];