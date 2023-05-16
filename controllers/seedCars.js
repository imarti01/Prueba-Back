const carsDB = {
  marcas: [
    {
      nombre: 'Seat',
      modelos: [
        {
          nombre: 'Arona',
          img: 'https://www.diariomotor.com/imagenes/2018/03/skoda_lanzamiento_su_seat_arona_00.jpg',
        },
        {
          nombre: 'Ibiza',
        },
        {
          nombre: 'Leon',
          img: 'https://www.topgear.com/sites/default/files/images/news-article/carousel/2019/01/4e9fb55f7ef03a11029c2fb4864fb621/20181201_siemoneitracing_vader_leoncuprast_001_front34_online.jpg',
        },
      ],
    },
    {
      nombre: 'Mercedes-Benz',
      modelos: [
        {
          nombre: 'Classe A',
        },
        {
          nombre: 'Classe C',
          img: 'https://www.autobild.es/sites/autobild.es/public/dc/fotos/batch_20C0673_002.jpg',
        },
        {
          nombre: 'Classe G',
          img: 'https://img.remediosdigitales.com/9afd76/21c0550_001/1366_2000.jpeg',
        },
      ],
    },
    {
      nombre: 'Peugeot',
      modelos: [
        {
          nombre: '306',
        },
        {
          nombre: '406',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckrOZz_I1oeV3efjMpuTZqhfhbz09nEcGmYqREiXN&s',
        },
        {
          nombre: 'Partner',
        },
      ],
    },
    {
      nombre: 'Nissan',

      modelos: [
        {
          nombre: 'Almera',
          img: 'https://www.autoscout24.es/cms-content-assets/2g0k6EgGWyAzDAjcU2xZIl-8cdbf2a75557b35a85ed332d204620c6-nissan-almera-l-01-1100.jpg',
        },
        {
          nombre: 'Juke',
          img: 'https://cdn.motor1.com/images/mgl/rbrEE/s1/2018-nissan-juke-euro-spec.jpg',
        },
        {
          nombre: 'Qashqai',
        },
      ],
    },
    {
      nombre: 'Audi',
      modelos: [
        {
          nombre: 'A4',
          img: 'https://images.prismic.io/carwow/d87f95a9-0970-45b1-ac67-86642f39dce7_Audi-A4_08-1.jpg?fit=clip&q=60&w=750&cs=tinysrgb&auto=format',
        },
        {
          nombre: 'RS3',
          img: 'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/Audi_A3_2020.jpg?itok=MkiCOhpe',
        },
        {
          nombre: 'Q7',
        },
      ],
    },
  ],
};

const Car = require('../models/Car');

const seedCars = () => {
  carsDB.marcas.forEach((brand) => {
    brand.modelos.forEach(async (car) => {
      const newCar = new Car({
        brand: brand.nombre,
        name: car.nombre,
        img: car.img ? car.img : '',
      });
      await newCar.save();
    });
  });
};

module.exports = { seedCars };
