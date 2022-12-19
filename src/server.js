/**
 * URL aplikasi client berada pada:
 * http://notesapp-v1.dicodingacademy.com/
 * ----------------------------------------------
 * LISENSI DAN SUMBER KODE DIMILIKI OLEH DICODING
 * ----------------------------------------------
 * Untuk lengkapnya kunjungi kelas 'Belajar Membuat Aplikasi Back-End untuk Pemula'.
 * 
 * Sebelum itu ubahlah 'Allow invalid certificates for resources loaded from localhost.'
 * dan 'Allow invalid certificates for resources loaded from localhost.' menjadi enabled di chrome://flags
 * ----------------------------------------------
 * Untuk 'Allow invalid certificates for resources loaded from localhost.' tambahkan tautan berikut dalam box:
 * http://localhost,
 * http://localhost:5000,
 * http://notesapp-v1.dicodingacademy.com
 */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();