const trips = [
  {
    id: 1,
    title: 'Fall Colors',
    date: 'September 18-20, 2016',
    category: 'north-america',
    locations: [
      {
        name: 'Keystone Lake, Pennsylvania',
        dec: [40.7483124, -79.2927653],
        gps: {
          lat: {
            deg: 40,
            min: 44
          },
          long: {
            deg: -79,
            min: 17
          }
        }
      }
    ],
    mapZoom: 5,
    excerpt: 'It started with a simple hike on a Saturday, but quickly became an unforgettable break from the norm.',
    summaryPs: [
      'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
      'Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.'
    ],
    images: {
      featured: {
        src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861461/featured_xtzby6.jpg',
        w: 1680,
        h: 1118
      },
      others: [
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861461/photo-1444748225110-5ca27d8eb7c5_xemcyh.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861461/photo-1444858198890-97748c4f3f0f_ewv07x.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861461/thumbnail_d3zhme.jpg',
          w: 1680,
          h: 1120
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Italian Summer',
    date: 'July 18-29, 2016',
    category: 'europe',
    locations: [
      {
        name: 'Italian Countryside',
        dec: [44.521627,9.160286],
        gps: {
          lat: {
            deg: 44,
            min: 31
          },
          long: {
            deg: 9,
            min: 9
          }
        }
      },
      {
        name: 'La Spezia',
        dec: [44.1072542,9.819329],
        gps: {
          lat: {
            deg: 44,
            min: 6
          },
          long: {
            deg: 9,
            min: 49
          }
        }
      },
      {
        name: 'Florence',
        dec: [43.7800148,11.2059487],
        gps: {
          lat: {
            deg: 43,
            min: 46
          },
          long: {
            deg: 11,
            min: 12
          }
        }
      },
      {
        name: 'Piediluco',
        dec: [42.535833,12.753833],
        gps: {
          lat: {
            deg: 42,
            min: 32
          },
          long: {
            deg: 12,
            min: 45
          }
        }
      }
    ],
    mapZoom: 6,
    excerpt: 'We decided to take the second half of July to go on the trip of our lifetime.',
    summaryPs: [
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.',
      'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
    ],
    images: {
      featured: {
        src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861319/photo-1413991394453-3e9a746ae4d3_f05zv3.jpg',
        w: 1680,
        h: 1120
      },
      others: [
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861319/photo-1447722939828-559fee94b1f5_xzvqxh.jpg',
          w: 1680,
          h: 1113
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861319/photo-1419987606411-0713060d7e30_czx24g.jpg',
          w: 1680,
          h: 1113
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861319/photo-1452509133926-2b180c6d6245_udy9wj.jpg',
          w: 1680,
          h: 945
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861319/photo-1415329343600-a53dd8daf392_hpmerk.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861319/photo-1462887522061-50ac95eaad10_og3ge8.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861320/photo-1444214058525-761aeb793113_i3ufm7.jpg',
          w: 1680,
          h: 945
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861320/photo-1433883669848-fa8a7ce070b2_dhebpg.jpg',
          w: 1200,
          h: 1200
        },
      ]
    }
  },
  {
    id: 3,
    title: 'Backyard Stroll',
    date: 'July 30, 2016',
    category: 'north-america',
    locations: [
      {
        name: 'New York City',
        dec: [40.7058254,-74.1180846],
        gps: {
          lat: {
            deg: 42,
            min: 44
          },
          long: {
            deg: -74,
            min: 7
          }
        }
      }
    ],
    mapZoom: 8,
    excerpt: 'Every so often it becomes apparent that the world can be pretty inspiring, even in your own backyard.',
    summaryPs: [
      'Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.'
    ],
    images: {
      featured: {
        src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861144/photo-1444968458904-07a562b0a68f_ttgwli.jpg',
        w: 1680,
        h: 1120
      },
      others: [
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861143/mtNrf7oxS4uSxTzMBWfQ_DSC_0043_kwlzj3.jpg',
          w: 1680,
          h: 1117
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861143/photo-1423655156442-ccc11daa4e99_jsqdof.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861144/photo-1440613905118-99b921706b5c_azfavv.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861143/photo-1445400729573-1f666abb9447_b06g8g.jpg',
          w: 799,
          h: 1200
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861144/photo-1446226760091-cc85becf39b4_kwrq2e.jpg',
          w: 1680,
          h: 1260
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861144/photo-1463310127152-33b375103141_zxnsxk.jpg',
          w: 1680,
          h: 1116
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861144/photo-1464516124364-bff6806ae9bb_jemcy5.jpg',
          w: 1680,
          h: 947
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861144/photo-1467556033700-f270ac4254fe_lwcp68.jpg',
          w: 1680,
          h: 1122
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467861144/stones_lxkd9e.jpg',
          w: 900,
          h: 1200
        },
      ]
    }
  },
  {
    id: 4,
    title: 'Castley Rock',
    date: 'March 18-19, 2016',
    category: 'europe',
    locations: [
      {
        name: 'Neuschwanstein Castle',
        dec: [47.5575776,10.7476117],
        gps: {
          lat: {
            deg: 47,
            min: 33
          },
          long: {
            deg: 10,
            min: 44
          }
        }
      }
    ],
    mapZoom: 5,
    excerpt: 'Sometimes you come across something that doesn\'t quite seem real. We found a real life fairy tale.',
    summaryPs: [
      'Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum.',
      'Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
    ],
    images: {
      featured: {
        src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860806/photo-1465844976020-e81b58140685_s0uzyb.jpg',
        w: 1680,
        h: 1123
      },
      others: [
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860806/photo-1418905057947-f4fc26d4c7c8_emzjnb.jpg',
          w: 1680,
          h: 1116
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860806/photo-1444676143642-ca2104ba97e1_k7yfnz.jpg',
          w: 1680,
          h: 932
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860806/photo-1449452198679-05c7fd30f416_h2hekr.jpg',
          w: 1680,
          h: 1121
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860805/photo-1465205568425-23fdd3805e49_vhjmhw.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860806/photo-1467269204594-9661b134dd2b_lerdtx.jpg',
          w: 1680,
          h: 1121
        },
      ]
    }
  },
  {
    id: 5,
    title: 'Emerald Dreams',
    date: 'April 28-30, 2016',
    category: 'canada',
    locations: [
      {
        name: 'British Columbia',
        dec: [56.8476553,-128.8695293],
        gps: {
          lat: {
            deg: 56,
            min: 50
          },
          long: {
            deg: -128,
            min: 52
          }
        }
      },
      {
        name: 'Tweedsmuir South Provincial Park',
        dec: [52.9670421,-123.2115703]
      },
      {
        name: 'Mt. Baker-Snoqualmie National Forest',
        dec: [50.9569101,-120.388084]
      }
    ],
    mapZoom: 5,
    excerpt: 'In search for the perfect forest, I began my search in the Northwest.',
    summaryPs: [
      'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      'Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
    ],
    images: {
      featured: {
        src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860571/photo-1446483050676-bd2fdf3ac2d6_f46u1q.jpg',
        w: 1680,
        h: 1120
      },
      others: [
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860570/photo-1417434743061-9873e0beaed6_m3hsbb.jpg',
          w: 1680,
          h: 1121
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860570/photo-1426170042593-200f250dfdaf_dsbqcr.jpg',
          w: 1680,
          h: 945
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860569/photo-1430959972786-b28585aaf657_tk2ggw.jpg',
          w: 675,
          h: 1200
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860570/photo-1438514794628-6ad25147b1d4_gy27ou.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860570/photo-1440964829947-ca3277bd37f8_liqnu9.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860570/photo-1445285303476-2f3b16d67b7a_nezt9v.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860571/photo-1458724029936-2cc6ee38f5ef_syos6f.jpg',
          w: 1680,
          h: 1120
        },
      ]
    }
  },
  {
    id: 6,
    title: 'Big Sur',
    date: 'March 5, 2016',
    category: 'north-america',
    locations: [
      {
        name: 'Big Sur, California',
        dec: [36.3318028,-121.9582603],
        gps: {
          lat: {
            deg: 36,
            min: 19
          },
          long: {
            deg: -121,
            min: 57
          }
        }
      },
    ],
    mapZoom: 7,
    excerpt: 'Always been a pretty big fan of the pacific coast drives. In Big Sur, it doesn\'t get much better.',
    summaryPs: [
      'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui.',
      'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    images: {
      featured: {
        src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860358/photo-1463567612873-80eaadb083c7_hlotjv.jpg',
        w: 1680,
        h: 1120
      },
      others: [
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860358/photo-1465700679083-8d390e5af3b0_usv7oj.jpg',
          w: 1680,
          h: 1260
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860358/photo-1465239436466-fd877a9153ca_uouldq.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860357/photo-1457542591662-d12c46d26f45_mg2nhf.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860358/photo-1446630073557-fca43d580fbe_q3e20q.jpg',
          w: 800,
          h: 1200
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467860357/photo-1446038173735-acad037199d2_vjkauq.jpg',
          w: 801,
          h: 1200
        },
      ]
    }
  },
  {
    id: 7,
    title: 'The Park',
    date: 'Feb 27, 2016',
    category: 'north-america',
    locations: [
      {
        name: 'Yosemite',
        dec: [37.8651053,-119.5405181],
        gps: {
          lat: {
            deg: 37,
            min: 51
          },
          long: {
            deg: -119,
            min: 32
          }
        }
      },
    ],
    mapZoom: 7,
    excerpt: 'Used to summer camp here as a kid, revisiting it as an adult doesn\'t dimish the scale.',
    summaryPs: [
      'Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
      'Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna.'
    ],
    images: {
      featured: {
        src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467859787/photo-1426604966848-d7adac402bff_hp6ss2.jpg',
        w: 1680,
        h: 1120
      },
      others: [
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467859788/photo-1465588042420-47a53c2d0320_fdooig.jpg',
          w: 1680,
          h: 1057
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467859788/photo-1461703048574-9a342517f1bb_oyekk9.jpg',
          w: 1680,
          h: 945
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467859787/photo-1444958057557-34ccee9c9caa_gs4diw.jpg',
          w: 1680,
          h: 1117
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467859787/photo-1441239372925-ac0b51c4c250_zp0wwe.jpg',
          w: 892,
          h: 1200
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467859790/photo-1432879772702-fd77074b7d26_upayxe.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467859787/photo-1429516387459-9891b7b96c78_tqtnc0.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467859787/L2NfDz5SOm7Gbf755qpw_DSCF0490_giwavr.jpg',
          w: 1680,
          h: 1120
        },
      ]
    }
  },
  {
    id: 8,
    title: 'Getaway',
    date: 'Jan 18-25, 2016',
    category: 'carribean',
    locations: [
      {
        name: 'Carribean Islands',
        dec: [17.1255307,-61.853356],
        gps: {
          lat: {
            deg: 17,
            min: 7
          },
          long: {
            deg: -61,
            min: 51
          }
        }
      },
      {
        name: 'Montseratt',
        dec: [16.7248431,-62.2352378],
      },
      {
        name: 'Trois Rivieres',
        dec: [15.9730552,-61.6526128],
      },
      {
        name: 'Portsmouth',
        dec: [15.5616928,-61.4697934],
      },
    ],
    mapZoom: 6,
    excerpt: 'The perfect island getaway isn\'t hard to find, but finding the best is a different story.',
    summaryPs: [
      'Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum.',
      'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
    ],
    images: {
      featured: {
        src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467858875/photo-1465415665906-25c1d2fe40b7_hldhmx.jpg',
        w: 1680,
        h: 1120
      },
      others: [
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467858876/photo-1432298026442-0eabd0a98870_ol2lbu.jpg',
          w: 1680,
          h: 1260
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467858876/photo-1437719417032-8595fd9e9dc6_qt6ud8.jpg',
          w: 1680,
          h: 1260
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467858875/photo-1443181994330-3e365ff8949e_o4g3kc.jpg',
          w: 1200,
          h: 1200
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467858876/photo-1447758501994-89bb4bae35d3_xfg7tr.jpg',
          w: 1680,
          h: 1121
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467858875/photo-1461537236760-a9cb9d8ce48f_qhlqkb.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467858874/photo-1467296581482-7cc27c2500ba_jmja1r.jpg',
          w: 1680,
          h: 929
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467858875/photo-1467753445110-a4321e6c63c2_ioizav.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467858875/uvRBqDAfQfaGPJiI6lVS_R0001899_qyxl3h.jpg',
          w: 1680,
          h: 1113
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467858874/yvDPJ8ZSmSVob7pRxIvU_IMG_40322_c2vqns.jpg',
          w: 1680,
          h: 1120
        },
      ]
    }
  },
  {
    id: 9,
    title: 'Jack Frost',
    date: 'Jan 6-8, 2016',
    category: 'north-america',
    locations: [
      {
        name: 'Sundance, Utah',
        dec: [40.3934203,-111.6062805],
        gps: {
          lat: {
            deg: 40,
            min: 23
          },
          long: {
            deg: -111,
            min: 36
          }
        }
      }
    ],
    mapZoom: 6,
    excerpt: 'A suprisingly warm touch was felt amongst some of the coldest skiing I\'ve ever done.',
    summaryPs: [
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    images: {
      featured: {
        src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467862328/photo-1428604339796-72401d912824_wkmfzu.jpg',
        w: 1680,
        h: 1120
      },
      others: [
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467862328/photo-1456374407032-6e4baf58fb62_jotdda.jpg',
          w: 1680,
          h: 1120
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/c_scale,h_1200/v1467862328/photo-1434234850832-b239a00697de_xis7x6.jpg',
          w: 900,
          h: 1200
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467862328/photo-1460457825667-bd5d72938ec5_iiahzd.jpg',
          w: 1680,
          h: 894
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467862328/photo-1466166193924-e5ec8218d730_l3bmdb.jpg',
          w: 1680,
          h: 1113
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467862328/photo-1456437340567-faf782b404e7_opcizu.jpg',
          w: 1680,
          h: 1177
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467862328/photo-1465220183275-1faa863377e3_avbwp1.jpg',
          w: 1680,
          h: 1260
        },
        {
          src: 'https://res.cloudinary.com/adambbecker/image/upload/v1467862329/photo-1418290232843-5d7a0bd93f7d_lan7en.jpg',
          w: 1680,
          h: 1121
        },
      ]
    }
  },
];

export default trips;
