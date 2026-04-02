export const data = {
  en: {
    config: {
      name: 'hartono-milani rosmita',
      bgm: 'https://cdngarenanow-a.akamaihd.net/gstaticid/BMG/wildwet/sounds/love-song-3.mp3',
    },
    header: {
      bgImageLandscape: [require('./assets/images/bg1.jpg'), require('./assets/images/bg2.jpg'), require('./assets/images/bg3.jpg')],
      bgImagePortrait: [require('./assets/images/bg4.jpg')],
      bridegroom: 'Hartono & Milani Rosmita',
      desc: 'ARE GETTING MARRIED',
      date: 'SEPTEMBER 18TH, 2027',
      timestamp: 1703989800000,
      ongoing: 'ONGOING',
      days: 'DAYS',
      hours: 'HOURS',
      minutes: 'MINUTES',
      seconds: 'SECONDS',
      line1: 'Kindly deliver to: Mr. / Mrs. / Ms.',
      line2: 'We invite you to celebrate our wedding',
      button: 'Open Invitation',
    },
    navbar: {
      brand: 'H & M',
      nav: [
        { to: 'header', text: 'Home' },
        { to: 'couple', text: 'Couple' },
        { to: 'events', text: 'Events' },
        { to: 'moment', text: 'Moment' },
        { to: 'message', text: 'Message' }, // Tambahkan ini agar navigasi ke pesan ada
      ],
    },
    couple: {
      title: 'Meet Happy Couple',
      groom: {
        name: 'HARTONO',
        photo: require('./assets/images/couple/1.jpg'),
        status: 'GROOM',
        socmed: { facebook: '', twitter: '', instagram: '#' },
        description: 'The son of Mr. X and Mrs. Y',
      },
      bride: {
        name: 'MILANI ROSMITA',
        photo: require('./assets/images/couple/2.jpg'),
        status: 'BRIDE',
        socmed: { facebook: '', twitter: '', instagram: '#' },
        description: 'The daughter of Mr. A and Mrs. B',
      },
    },
    events: {
      ceremony: {
        type: 'ceremony',
        foto: require('./assets/images/events/ceremony.png'),
        title: 'THE CEREMONY',
        date: 'Saturday, September 18th 2027',
        time: '09.00 AM - 11.00 AM',
        address: { line1: 'Alamat Akad Nikah', line2: 'Kota Bandung', line3: '-' },
      },
      reception: {
        type: 'reception',
        foto: require('./assets/images/events/reception.png'),
        title: 'THE RECEPTION',
        date: 'Saturday, September 18th 2027',
        time: '12.00 PM - 05.00 PM',
        address: { line1: 'Gedung Resepsi', line2: 'Kota Bandung', line3: '-' },
      },
    },
    moment: {
      images: [
        { src: require('./assets/images/moment/1.jpg'), thumbnail: require('./assets/images/moment/thumbnails/1.jpg'), thumbnailWidth: 320, thumbnailHeight: 200 },
        { src: require('./assets/images/moment/2.jpg'), thumbnail: require('./assets/images/moment/thumbnails/2.jpg'), thumbnailWidth: 240, thumbnailHeight: 320 },
      ],
    },
    // INI BAGIAN YANG TADI HILANG DAN BIKIN BLANK PUTIH
    message: {
      title: 'Kirim Ucapan',
      description: 'Berikan doa restu untuk kami',
      items: [
        { name: 'Sistem', text: 'Selamat datang di undangan kami!' }
      ]
    },
    location: {
      maps: 'https://www.google.com/maps',
    },
  },
};