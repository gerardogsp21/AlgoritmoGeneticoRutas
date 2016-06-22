 var ciudades = [

      {id: 1, label: 'Valledupar', title:'Ciudad 1'},
      {id: 2, label: 'La Paz', title:'Ciudad 2'},
      {id: 3, label: 'Barranquilla', title:'Ciudad 3'},
      {id: 4, label: 'Codazzi', title:'Ciudad 4'},
      {id: 5, label: 'Santa Marta', title:'Ciudad 5'},
      {id: 6, label: 'Cartagena', title:'Ciudad 6'},
      {id: 7, label: 'Bucaramanga', title:'Ciudad 7'},
      {id: 8, label: 'Fundación', title:'Ciudad 8'},
      {id: 9, label: 'Ocaña', title:'Ciudad 9'},
      {id: 10, label: 'Pamplona', title:'Ciudad 10'},
      {id: 11, label: 'Cúcuta', title:'Ciudad 11'},
      {id: 12, label: 'Aguachica', title:'Ciudad 12'},
      {id: 13, label: 'El Carmen de Bolivar', title:'Ciudad 13'},
      {id: 14, label: 'Sincelejo', title:'Ciudad 14'},
      {id: 15, label: 'San Juan', title:'Ciudad 15'},
      {id: 16, label: 'Riohacha', title:'Ciudad 16'},
      {id: 17, label: 'Barrancabermeja', title:'Ciudad 17'},
      {id: 18, label: 'Plato', title:'Ciudad 18'},
      {id: 19, label: 'Villanueva', title:'Ciudad 19'},
      {id: 20, label: 'El Banco', title:'Ciudad 20'},
      {id: 21, label: 'Bosconia', title:'Ciudad 21'},
      {id: 22, label: 'Curumaní', title:'Ciudad 22'},
      {id: 23, label: 'San Alberto', title:'Ciudad 23'},
      {id: 24, label: 'Montería', title:'Ciudad 24'},
      {id: 25, label: 'Tunja', title:'Ciudad 25'},
      {id: 26, label: 'La Jagua de Ibirico', title:'Ciudad 26'},
      {id: 27, label: 'Caucasia', title:'Ciudad 27'},
      {id: 28, label: 'Magangué', title:'Ciudad 28'},
      {id: 29, label: 'Sabanalarga', title:'Ciudad 29'},
      {id: 30, label: 'Medellin', title:'Ciudad 30'},
      {id: 31, label: 'Itagüi', title:'Ciudad 31'},
      {id: 32, label: 'Manizales', title:'Ciudad 32'},
      {id: 33, label: 'Sogamoso', title:'Ciudad 33'},
      {id: 34, label: 'Fonseca', title:'Ciudad 34'},
      {id: 35, label: 'Becerril', title:'Ciudad 35'},
      {id: 36, label: 'Ciénaga', title:'Ciudad 36'},
      {id: 37, label: 'Maicao', title:'Ciudad 37'},
      {id: 38, label: 'Santa Catalina', title:'Ciudad 38'},
      {id: 39, label: 'El Dificil', title:'Ciudad 39'},
      {id: 40, label: 'Lorica', title:'Ciudad 40'},
      {id: 41, label: 'Sahagún', title:'Ciudad 41'},
      {id: 42, label: 'Duitama', title:'Ciudad 42'},
      {id: 43, label: 'Mariquita', title:'Ciudad 43'},
      {id: 44, label: 'Ibagué', title:'Ciudad 44'},
      {id: 45, label: 'Pailitas', title:'Ciudad 45'},
      {id: 46, label: 'Tolú', title:'Ciudad 46'},
      {id: 47, label: 'Cereté', title:'Ciudad 47'},
      {id: 48, label: 'El paso', title:'Ciudad 48'},
      {id: 49, label: 'Rionegro', title:'Ciudad 49'},
      {id: 50, label: 'El copey', title:'Ciudad 50'}

    ];

//     Arreglo de conexiones
    var caminos = [
      {id:1 ,from: 1, to: 2, distancia:19, tiempoRecorido:0.5, peajes:0, estadoVia:0, tipoVia:2, condicionesVia:0, seguridad:0,      title:'id:1 ,distancia:19, tiempoRecorido:0.5, peajes:0, estadoVia:0, tipoVia:2, condicionesVia:0, seguridad:0'},
      {id:2 ,from: 1, to: 3, distancia:299, tiempoRecorido:4.83, peajes:3, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:1,    title:'id:2 ,distancia:299, tiempoRecorido:4.83, peajes:3, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:1'},
      {id:3 ,from: 1, to: 4, distancia:64, tiempoRecorido:1, peajes:0, estadoVia:1, tipoVia:1, condicionesVia:0, seguridad:0,        title:'id:3 ,distancia:64, tiempoRecorido:1, peajes:0, estadoVia:1, tipoVia:1, condicionesVia:0, seguridad:0'},
      {id:4 ,from: 2, to: 4, distancia:45, tiempoRecorido:0.66, peajes:0, estadoVia:0, tipoVia:2, condicionesVia:0, seguridad:0,     title:'id:4 ,distancia:45, tiempoRecorido:0.66, peajes:0, estadoVia:0, tipoVia:2, condicionesVia:0, seguridad:0'},
      {id:5 ,from: 3, to: 5, distancia:106, tiempoRecorido:2, peajes:4, estadoVia:2, tipoVia:0, condicionesVia:0, seguridad:1,       title:'id:5 ,distancia:106, tiempoRecorido:2, peajes:4, estadoVia:2, tipoVia:0, condicionesVia:0, seguridad:1'},
      {id:6 ,from: 3, to: 6, distancia:121, tiempoRecorido:2, peajes:5, estadoVia:1, tipoVia:1, condicionesVia:0, seguridad:0,       title:'id:6 ,distancia:121, tiempoRecorido:2, peajes:5, estadoVia:1, tipoVia:1, condicionesVia:0, seguridad:0' },
      {id:7 ,from: 2, to: 6, distancia:382, tiempoRecorido:6, peajes:3, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:0,       title:'id:7 ,distancia:382, tiempoRecorido:6, peajes:3, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:0'},
      {id:8 ,from: 1, to: 7, distancia:457, tiempoRecorido:7, peajes:2, estadoVia:2, tipoVia:0, condicionesVia:1, seguridad:1,       title:'id:8 ,distancia:457, tiempoRecorido:7, peajes:6, estadoVia:2, tipoVia:0, condicionesVia:1, seguridad:1'},
      {id:9 ,from: 5, to: 8, distancia:101, tiempoRecorido:1.75, peajes:2, estadoVia:1, tipoVia:2, condicionesVia:1, seguridad:1,    title:'id:9 ,distancia:101, tiempoRecorido:1.75, peajes:2, estadoVia:1, tipoVia:2, condicionesVia:1, seguridad:1'},
      {id:10 ,from: 8, to: 6, distancia:265, tiempoRecorido:4, peajes:4, estadoVia:0, tipoVia:1, condicionesVia:1, seguridad:0,      title:'id:10 ,distancia:265, tiempoRecorido:4, peajes:4, estadoVia:0, tipoVia:1, condicionesVia:1, seguridad:0'},
      {id:11 ,from: 7, to: 9, distancia:214, tiempoRecorido:4, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0,      title:'id:11 ,distancia:214, tiempoRecorido:4, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0'},
      {id: 12,from: 7, to: 10, distancia:120, tiempoRecorido:3, peajes:2, estadoVia:2, tipoVia:0, condicionesVia:1, seguridad:1,     title:'id:12 ,distancia:120, tiempoRecorido:3, peajes:2, estadoVia:2, tipoVia:0, condicionesVia:1, seguridad:1'},
      {id: 13,from: 10, to: 11, distancia:73, tiempoRecorido:1.66, peajes:1, estadoVia:1, tipoVia:2, condicionesVia:0, seguridad:0,  title:'id:13 ,distancia:73, tiempoRecorido:1.66, peajes:1, estadoVia:1, tipoVia:2, condicionesVia:0, seguridad:0'},
      {id: 14,from: 9, to: 12, distancia:58, tiempoRecorido:1.41, peajes:2, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:1,   title:'id:14 ,distancia:58, tiempoRecorido:1.41, peajes:2, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:1'},
      {id: 15,from: 4, to: 12, distancia:220, tiempoRecorido:3, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1,     title:'id:15 ,distancia:220, tiempoRecorido:3, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1'},
      {id: 16,from: 6, to: 13, distancia:129, tiempoRecorido:2.3, peajes:3, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:0,   title:'id:16 ,distancia:129, tiempoRecorido:2.3, peajes:3, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:0'},
      {id: 17,from: 13, to: 14, distancia:83, tiempoRecorido:1.73, peajes:0, estadoVia:1, tipoVia:0, condicionesVia:1, seguridad:0,  title:'id:17 ,distancia:83, tiempoRecorido:1.73, peajes:0, estadoVia:1, tipoVia:0, condicionesVia:1, seguridad:0'},
      {id: 18,from: 1, to: 15, distancia:62, tiempoRecorido:1, peajes:1, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:1,      title:'id:18 ,distancia:62, tiempoRecorido:1, peajes:1, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:1'},
      {id: 19,from: 15, to: 16, distancia:110, tiempoRecorido:2, peajes:2, estadoVia:1, tipoVia:0, condicionesVia:1, seguridad:0,    title:'id:19 ,distancia:110, tiempoRecorido:2, peajes:2, estadoVia:1, tipoVia:0, condicionesVia:1, seguridad:0'},
      {id: 20,from: 5, to: 16, distancia:171, tiempoRecorido:2.63, peajes:5, estadoVia:0, tipoVia:2, condicionesVia:0, seguridad:0,  title:'id:20 ,distancia:171, tiempoRecorido:2.63, peajes:5, estadoVia:0, tipoVia:2, condicionesVia:0, seguridad:0'},
      {id: 21,from: 5, to: 7, distancia:116, tiempoRecorido:2, peajes:3, estadoVia:1, tipoVia:2, condicionesVia:1, seguridad:1,      title:'id:21 ,distancia:116, tiempoRecorido:2, peajes:3, estadoVia:1, tipoVia:2, condicionesVia:1, seguridad:1'},
      {id: 22,from: 17, to: 7, distancia:116, tiempoRecorido:2, peajes:3, estadoVia:1, tipoVia:2, condicionesVia:1, seguridad:1,     title:'id:22 ,distancia:116, tiempoRecorido:2, peajes:3, estadoVia:1, tipoVia:2, condicionesVia:1, seguridad:1'},
      {id: 23,from: 13, to: 18, distancia:56, tiempoRecorido:1.1, peajes:1, estadoVia:1, tipoVia:2, condicionesVia:0, seguridad:0,   title:'id:23 ,distancia:56, tiempoRecorido:1.1, peajes:1, estadoVia:1, tipoVia:2, condicionesVia:0, seguridad:0'},
      {id: 24,from: 15, to: 19, distancia:33, tiempoRecorido:0.63, peajes:0, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:0,  title:'id:24 ,distancia:33, tiempoRecorido:0.63, peajes:0, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:0'},
      {id: 25,from: 20, to: 12, distancia:116, tiempoRecorido:1.7, peajes:0, estadoVia:2, tipoVia:0, condicionesVia:1, seguridad:1,  title:'id:25 ,distancia:116, tiempoRecorido:1.7, peajes:0, estadoVia:2, tipoVia:0, condicionesVia:1, seguridad:1'},
      {id: 26,from: 8, to: 21, distancia:70, tiempoRecorido:1, peajes:0, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:1,      title:'id:26 ,distancia:70, tiempoRecorido:1, peajes:0, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:1'},
      {id: 27,from: 22, to: 21, distancia:100, tiempoRecorido:1.41, peajes:2, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:0, title:'id:27 ,distancia:100, tiempoRecorido:1.41, peajes:2, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:0'},
      {id: 28,from: 22, to: 12, distancia:114, tiempoRecorido:1.63, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1, title:'id:28 ,distancia:114, tiempoRecorido:1.63, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1'},
      {id: 29,from: 9, to: 11, distancia:198, tiempoRecorido:4, peajes:0, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:0,     title:'id:29 ,distancia:198, tiempoRecorido:4, peajes:0, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:0'},
      {id: 30,from: 23, to: 12, distancia:77, tiempoRecorido:1.23, peajes:1, estadoVia:1, tipoVia:2, condicionesVia:1, seguridad:0,  title:'id:30 ,distancia:77, tiempoRecorido:1.23, peajes:1, estadoVia:1, tipoVia:2, condicionesVia:1, seguridad:0'},
      {id: 31,from: 11, to: 23, distancia:294.2, tiempoRecorido:6.5, peajes:6, estadoVia:0, tipoVia:2, condicionesVia:1, seguridad:1,title:'id:31 ,distancia:294.2, tiempoRecorido:6.5, peajes:6, estadoVia:0, tipoVia:2, condicionesVia:1, seguridad:1'},
      {id: 32,from: 14, to: 24, distancia:116, tiempoRecorido:2, peajes:3, estadoVia:0, tipoVia:1, condicionesVia:1, seguridad:1,    title:'id:32 ,distancia:116, tiempoRecorido:2, peajes:3, estadoVia:0, tipoVia:1, condicionesVia:1, seguridad:1'},
      {id: 33,from: 25, to: 17, distancia:287, tiempoRecorido:6, peajes:5, estadoVia:0, tipoVia:2, condicionesVia:0, seguridad:0,    title:'id:33 ,distancia:287, tiempoRecorido:6, peajes:5, estadoVia:0, tipoVia:2, condicionesVia:0, seguridad:0'},
      {id: 34,from: 10, to: 25, distancia:399, tiempoRecorido:8.1, peajes:7, estadoVia:1, tipoVia:0, condicionesVia:1, seguridad:0,  title:'id:34 ,distancia:399, tiempoRecorido:8.1, peajes:7, estadoVia:1, tipoVia:0, condicionesVia:1, seguridad:0'},
      {id: 35,from: 4, to: 22, distancia:107, tiempoRecorido:1.5, peajes:0, estadoVia:2, tipoVia:0, condicionesVia:0, seguridad:0,   title:'id:35 ,distancia:107, tiempoRecorido:1.5, peajes:0, estadoVia:2, tipoVia:0, condicionesVia:0, seguridad:0'},
      {id: 36,from: 26, to: 4, distancia:55, tiempoRecorido:0.83, peajes:1, estadoVia:2, tipoVia:2, condicionesVia:0, seguridad:1,   title:'id:36 ,distancia:55, tiempoRecorido:0.83, peajes:1, estadoVia:2, tipoVia:2, condicionesVia:0, seguridad:1'},
      {id: 37,from: 26, to: 22, distancia:51, tiempoRecorido:0.72, peajes:0, estadoVia:1, tipoVia:1, condicionesVia:0, seguridad:1,  title:'id:37 ,distancia:51, tiempoRecorido:0.72, peajes:0, estadoVia:1, tipoVia:1, condicionesVia:0, seguridad:1'},
      {id: 38,from: 14, to: 18, distancia:114, tiempoRecorido:2, peajes:2, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1,    title:'id:38 ,distancia:114, tiempoRecorido:2, peajes:2, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1'},
      {id: 39,from: 24, to: 21, distancia:338, tiempoRecorido:6, peajes:5, estadoVia:0, tipoVia:2, condicionesVia:0, seguridad:0,    title:'id:39 ,distancia:338, tiempoRecorido:6, peajes:5, estadoVia:0, tipoVia:2, condicionesVia:0, seguridad:0'},
      {id: 40,from: 24, to: 27, distancia:121, tiempoRecorido:1.8, peajes:2, estadoVia:2, tipoVia:1, condicionesVia:1, seguridad:0,  title:'id:40 ,distancia:121, tiempoRecorido:1.8, peajes:2, estadoVia:2, tipoVia:1, condicionesVia:1, seguridad:0'},
      {id: 41,from: 14, to: 27, distancia:185, tiempoRecorido:3, peajes:3, estadoVia:1, tipoVia:2, condicionesVia:1, seguridad:0,    title:'id:41 ,distancia:185, tiempoRecorido:3, peajes:3, estadoVia:1, tipoVia:2, condicionesVia:1, seguridad:0'},
      {id: 42,from: 14, to: 28, distancia:93, tiempoRecorido:1.56, peajes:0, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1,  title:'id:42 ,distancia:93, tiempoRecorido:1.56, peajes:0, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1'},
      {id: 43,from: 18, to: 28, distancia:98, tiempoRecorido:2.31, peajes:1, estadoVia:2, tipoVia:0, condicionesVia:1, seguridad:1,  title:'id:43 ,distancia:98, tiempoRecorido:2.31, peajes:1, estadoVia:2, tipoVia:0, condicionesVia:1, seguridad:1'},
      {id: 44,from: 3, to: 29, distancia:48.4, tiempoRecorido:1.1, peajes:1, estadoVia:1, tipoVia:2, condicionesVia:0, seguridad:0,  title:'id:44 ,distancia:48.4, tiempoRecorido:1.1, peajes:1, estadoVia:1, tipoVia:2, condicionesVia:0, seguridad:0'},
      {id: 45,from: 30, to: 17, distancia:307, tiempoRecorido:5.7, peajes:6, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:0,  title:'id:45 ,distancia:307, tiempoRecorido:5.7, peajes:6, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:0'},
      {id: 46,from: 31, to: 30, distancia:11.4, tiempoRecorido:0.33, peajes:0, estadoVia:0, tipoVia:1, condicionesVia:1, seguridad:1,title:'id:46 ,distancia:11.4, tiempoRecorido:0.33, peajes:0, estadoVia:0, tipoVia:1, condicionesVia:1, seguridad:1'},
      {id: 47,from: 31, to: 32, distancia:187, tiempoRecorido:4, peajes:3, estadoVia:2, tipoVia:2, condicionesVia:0, seguridad:0,    title:'id:47 ,distancia:187, tiempoRecorido:4, peajes:3, estadoVia:2, tipoVia:2, condicionesVia:0, seguridad:0'},
      {id: 48,from: 17, to: 33, distancia:343.81, tiempoRecorido:7, peajes:5, estadoVia:1, tipoVia:0, condicionesVia:1, seguridad:0, title:'id:48 ,distancia:343.81, tiempoRecorido:7, peajes:5, estadoVia:1, tipoVia:0, condicionesVia:1, seguridad:0'},
      {id: 49,from: 33, to: 10, distancia:308, tiempoRecorido:7.48, peajes:4, estadoVia:1, tipoVia:0, condicionesVia:1, seguridad:1, title:'id:49 ,distancia:308, tiempoRecorido:7.48, peajes:4, estadoVia:1, tipoVia:0, condicionesVia:1, seguridad:1'},
      {id: 50,from: 33, to: 25, distancia:71, tiempoRecorido:1, peajes:2, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:1,     title:'id:50 ,distancia:71, tiempoRecorido:1, peajes:2, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:1'},
      {id: 51,from: 33, to: 30, distancia:71, tiempoRecorido:1, peajes:2, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:1,     title:'id:51 ,distancia:71, tiempoRecorido:1, peajes:2, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:1'},
      {id: 52,from: 23, to: 30, distancia:400, tiempoRecorido:6.48, peajes:8, estadoVia:0, tipoVia:1, condicionesVia:1, seguridad:0, title:'id:52 ,distancia:400, tiempoRecorido:6.48, peajes:8, estadoVia:0, tipoVia:1, condicionesVia:1, seguridad:0'},
      {id: 53,from: 19, to: 34, distancia:47, tiempoRecorido:0.83, peajes:1, estadoVia:2, tipoVia:2, condicionesVia:1, seguridad:0,  title:'id:53 ,distancia:47, tiempoRecorido:0.83, peajes:1, estadoVia:2, tipoVia:2, condicionesVia:1, seguridad:0'},
      {id: 54,from: 15, to: 26, distancia:170, tiempoRecorido:2.5, peajes:3, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:1,  title:'id:54 ,distancia:170, tiempoRecorido:2.5, peajes:3, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:1'},
      {id: 55,from: 16, to: 34, distancia:115, tiempoRecorido:2, peajes:2, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:0,    title:'id:55 ,distancia:115, tiempoRecorido:2, peajes:2, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:0'},
      {id: 56,from: 4,  to: 35, distancia:37, tiempoRecorido:0.5, peajes:0, estadoVia:1, tipoVia:2, condicionesVia:1, seguridad:0,   title:'id:56 ,distancia:37, tiempoRecorido:0.5, peajes:0, estadoVia:1, tipoVia:2, condicionesVia:1, seguridad:0'},
      {id: 57,from: 35, to: 26, distancia:18, tiempoRecorido:0.31, peajes:0, estadoVia:0, tipoVia:2, condicionesVia:0, seguridad:1,  title:'id:57 ,distancia:18, tiempoRecorido:0.31, peajes:0, estadoVia:0, tipoVia:2, condicionesVia:0, seguridad:1'},
      {id: 58,from: 36, to: 5, distancia:33, tiempoRecorido:0.75, peajes:1, estadoVia:2, tipoVia:0, condicionesVia:1, seguridad:1,   title:'id:58 ,distancia:33, tiempoRecorido:0.75, peajes:1, estadoVia:2, tipoVia:0, condicionesVia:1, seguridad:1'},
      {id: 59,from: 36, to: 8, distancia:72, tiempoRecorido:1.35, peajes:2, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:0,   title:'id:59 ,distancia:72, tiempoRecorido:1.35, peajes:2, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:0'},
      {id: 60,from: 36, to: 3, distancia:70.5, tiempoRecorido:1.41, peajes:0, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:0, title:'id:60 ,distancia:70.5, tiempoRecorido:1.41, peajes:0, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:0'},
      {id: 61,from: 37, to: 16, distancia:77.2, tiempoRecorido:1, peajes:1, estadoVia:1, tipoVia:1, condicionesVia:1, seguridad:1,   title:'id:61 ,distancia:77.2, tiempoRecorido:1, peajes:1, estadoVia:1, tipoVia:1, condicionesVia:1, seguridad:1'},
      {id: 62,from: 34, to: 37, distancia:103, tiempoRecorido:1.66, peajes:2, estadoVia:2, tipoVia:2, condicionesVia:0, seguridad:1, title:'id:62 ,distancia:103, tiempoRecorido:1.66, peajes:2, estadoVia:2, tipoVia:2, condicionesVia:0, seguridad:1'},
      {id: 63,from: 29, to: 38, distancia:46.8, tiempoRecorido:0.83, peajes:1, estadoVia:2, tipoVia:0, condicionesVia:0, seguridad:1,title:'id:63 ,distancia:46.8, tiempoRecorido:0.83, peajes:1, estadoVia:2, tipoVia:0, condicionesVia:0, seguridad:1'},
      {id: 64,from: 38, to: 6, distancia:36.1, tiempoRecorido:0.75, peajes:3, estadoVia:1, tipoVia:1, condicionesVia:0, seguridad:0, title:'id:64 ,distancia:36.1, tiempoRecorido:0.75, peajes:3, estadoVia:1, tipoVia:1, condicionesVia:0, seguridad:0'},
      {id: 65,from: 21, to: 39, distancia:41, tiempoRecorido:0.5, peajes:1, estadoVia:2, tipoVia:2, condicionesVia:1, seguridad:1,   title:'id:65 ,distancia:41, tiempoRecorido:0.5, peajes:1, estadoVia:2, tipoVia:2, condicionesVia:1, seguridad:1'},
      {id: 66,from: 18, to: 39, distancia:68.2, tiempoRecorido:1.21, peajes:2, estadoVia:0, tipoVia:1, condicionesVia:1, seguridad:1,title:'id:66 ,distancia:68.2, tiempoRecorido:1.21, peajes:2, estadoVia:0, tipoVia:1, condicionesVia:1, seguridad:1'},
      {id: 67,from: 14, to: 40, distancia:56.3, tiempoRecorido:1.35, peajes:0, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:0,title:'id:67 ,distancia:56.3, tiempoRecorido:1.35, peajes:0, estadoVia:0, tipoVia:1, condicionesVia:0, seguridad:0'},
      {id: 68,from: 24, to: 40, distancia:60.4, tiempoRecorido:1, peajes:1, estadoVia:2, tipoVia:0, condicionesVia:1, seguridad:0,   title:'id:68 ,distancia:60.4, tiempoRecorido:1, peajes:1, estadoVia:2, tipoVia:0, condicionesVia:1, seguridad:0'},
      {id: 69,from: 41, to: 24, distancia:70.9, tiempoRecorido:1.13, peajes:1, estadoVia:1, tipoVia:2, condicionesVia:0, seguridad:0,title:'id:69 ,distancia:70.9, tiempoRecorido:1.13, peajes:1, estadoVia:1, tipoVia:2, condicionesVia:0, seguridad:0'},
      {id: 70,from: 40, to: 41, distancia:72.9, tiempoRecorido:1.38, peajes:0, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:0,title:'id:70 ,distancia:72.9, tiempoRecorido:1.38, peajes:0, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:0'},
      {id: 71,from: 33, to: 42, distancia:19.7, tiempoRecorido:0.5, peajes:0, estadoVia:1, tipoVia:1, condicionesVia:1, seguridad:1, title:'id:71 ,distancia:19.7, tiempoRecorido:0.5, peajes:0, estadoVia:1, tipoVia:1, condicionesVia:1, seguridad:1'},
      {id: 72,from: 25, to: 42, distancia:54.7, tiempoRecorido:1, peajes:1, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1,   title:'id:72 ,distancia:54.7, tiempoRecorido:1, peajes:1, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1'},
      {id: 73,from: 32, to: 43, distancia:119, tiempoRecorido:2.86, peajes:3, estadoVia:2, tipoVia:0, condicionesVia:0, seguridad:0, title:'id:73 ,distancia:119, tiempoRecorido:2.86, peajes:3, estadoVia:2, tipoVia:0, condicionesVia:0, seguridad:0'},
      {id: 74,from: 43, to: 44, distancia:118, tiempoRecorido:1.86, peajes:2, estadoVia:1, tipoVia:1, condicionesVia:1, seguridad:0, title:'id:74 ,distancia:118, tiempoRecorido:1.86, peajes:2, estadoVia:1, tipoVia:1, condicionesVia:1, seguridad:0'},
      {id: 75,from: 31, to: 44, distancia:424, tiempoRecorido:6.73, peajes:9, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1, title:'id:75 ,distancia:424, tiempoRecorido:6.73, peajes:9, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1'},
      {id: 76,from: 43, to: 42, distancia:357, tiempoRecorido:6, peajes:6, estadoVia:2, tipoVia:2, condicionesVia:0, seguridad:0,    title:'id:76 ,distancia:357, tiempoRecorido:6, peajes:6, estadoVia:2, tipoVia:2, condicionesVia:0, seguridad:0'},
      {id: 77,from: 31, to: 17, distancia:318, tiempoRecorido:5.66, peajes:4, estadoVia:1, tipoVia:2, condicionesVia:0, seguridad:0, title:'id:77 ,distancia:318, tiempoRecorido:5.66, peajes:4, estadoVia:1, tipoVia:2, condicionesVia:0, seguridad:0'},
      {id: 78,from: 27, to: 30, distancia:285, tiempoRecorido:4.43, peajes:3, estadoVia:1, tipoVia:1, condicionesVia:0, seguridad:1, title:'id:78 ,distancia:285, tiempoRecorido:4.43, peajes:3, estadoVia:1, tipoVia:1, condicionesVia:0, seguridad:1'},
      {id: 79,from: 20, to: 39, distancia:180, tiempoRecorido:3, peajes:1, estadoVia:2, tipoVia:2, condicionesVia:1, seguridad:0,    title:'id:79 ,distancia:180, tiempoRecorido:3, peajes:1, estadoVia:2, tipoVia:2, condicionesVia:1, seguridad:0'},
      {id: 80,from: 45, to: 20, distancia:58.2, tiempoRecorido:1, peajes:0, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1,   title:'id:80 ,distancia:58.2, tiempoRecorido:1, peajes:0, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1'},
      {id: 81,from: 45, to: 22, distancia:35.9, tiempoRecorido:0.5, peajes:0, estadoVia:1, tipoVia:2, condicionesVia:0, seguridad:1, title:'id:81 ,distancia:35.9, tiempoRecorido:0.5, peajes:0, estadoVia:1, tipoVia:2, condicionesVia:0, seguridad:1'},
      {id: 82,from: 12, to: 45, distancia:79.5, tiempoRecorido:1.1, peajes:1, estadoVia:2, tipoVia:1, condicionesVia:1, seguridad:1, title:'id:82 ,distancia:79.5, tiempoRecorido:1.1, peajes:1, estadoVia:2, tipoVia:1, condicionesVia:1, seguridad:1'},
      {id: 83,from: 13, to: 46, distancia:111, tiempoRecorido:2, peajes:2, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:0,    title:'id:83 ,distancia:111, tiempoRecorido:2, peajes:2, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:0'},
      {id: 84,from: 46, to: 40, distancia:49.8, tiempoRecorido:1, peajes:1, estadoVia:0, tipoVia:2, condicionesVia:1, seguridad:0,   title:'id:84 ,distancia:49.8, tiempoRecorido:1, peajes:1, estadoVia:0, tipoVia:2, condicionesVia:1, seguridad:0'},
      {id: 85,from: 46, to: 14, distancia:41.9, tiempoRecorido:0.86, peajes:0, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:0,title:'id:85 ,distancia:41.9, tiempoRecorido:0.86, peajes:0, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:0'},
      {id: 86,from: 24, to: 46, distancia:109, tiempoRecorido:2.15, peajes:4, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:1, title:'id:86 ,distancia:109, tiempoRecorido:2.15, peajes:4, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:1'},
      {id: 87,from: 24, to: 47, distancia:19, tiempoRecorido:0.5, peajes:0, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:1,   title:'id:87 ,distancia:19, tiempoRecorido:0.5, peajes:0, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:1'},
      {id: 88,from: 47, to: 40, distancia:41.7, tiempoRecorido:0.66, peajes:0, estadoVia:2, tipoVia:0, condicionesVia:1, seguridad:0,title:'id:88 ,distancia:41.7, tiempoRecorido:0.66, peajes:0, estadoVia:2, tipoVia:0, condicionesVia:1, seguridad:0'},
      {id: 89,from: 41, to: 47, distancia:53, tiempoRecorido:0.83, peajes:0, estadoVia:0, tipoVia:2, condicionesVia:1, seguridad:1,  title:'id:89 ,distancia:53, tiempoRecorido:0.83, peajes:0, estadoVia:0, tipoVia:2, condicionesVia:1, seguridad:1'},
      {id: 90,from: 48, to: 21, distancia:42.8, tiempoRecorido:0.61, peajes:1, estadoVia:1, tipoVia:1, condicionesVia:0, seguridad:0,title:'id:90 ,distancia:42.8, tiempoRecorido:0.61, peajes:1, estadoVia:1, tipoVia:1, condicionesVia:0, seguridad:0'},
      {id: 91,from: 35, to: 48, distancia:74.6, tiempoRecorido:1.35, peajes:2, estadoVia:1, tipoVia:1, condicionesVia:1, seguridad:0,title:'id:91 ,distancia:74.6, tiempoRecorido:1.35, peajes:2, estadoVia:1, tipoVia:1, condicionesVia:1, seguridad:0'},
      {id: 92,from: 26, to: 48, distancia:67.6, tiempoRecorido:1.18, peajes:0, estadoVia:2, tipoVia:2, condicionesVia:1, seguridad:1,title:'id:92 ,distancia:67.6, tiempoRecorido:1.18, peajes:0, estadoVia:2, tipoVia:2, condicionesVia:1, seguridad:1'},
      {id: 93,from: 30, to: 49, distancia:53.7, tiempoRecorido:1, peajes:1, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:1,   title:'id:93 ,distancia:53.7, tiempoRecorido:1, peajes:1, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:1'},
      {id: 94,from: 49, to: 31, distancia:46.2, tiempoRecorido:1.06, peajes:0, estadoVia:2, tipoVia:1, condicionesVia:1, seguridad:0,title:'id:94 ,distancia:46.2, tiempoRecorido:1.06, peajes:0, estadoVia:2, tipoVia:1, condicionesVia:1, seguridad:0'},
      {id: 95,from: 8, to: 50, distancia:49.5, tiempoRecorido:0.75, peajes:0, estadoVia:0, tipoVia:2, condicionesVia:0, seguridad:1, title:'id:95 ,distancia:49.5, tiempoRecorido:0.75, peajes:0, estadoVia:0, tipoVia:2, condicionesVia:0, seguridad:1'},
      {id: 96,from: 21, to: 50, distancia:22.6, tiempoRecorido:0.41, peajes:0, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1,title:'id:96 ,distancia:22.6, tiempoRecorido:0.41, peajes:0, estadoVia:0, tipoVia:0, condicionesVia:1, seguridad:1'},
      {id: 97,from: 3, to: 50, distancia:118, tiempoRecorido:1.63, peajes:2, estadoVia:1, tipoVia:1, condicionesVia:1, seguridad:0,  title:'id:97 ,distancia:118, tiempoRecorido:1.63, peajes:2, estadoVia:1, tipoVia:1, condicionesVia:1, seguridad:0'},
      {id: 98,from: 18, to: 50, distancia:132, tiempoRecorido:2.2, peajes:3, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:0,  title:'id:98 ,distancia:132, tiempoRecorido:2.2, peajes:3, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:0'},
      {id: 99,from: 16, to: 29, distancia:310, tiempoRecorido:5, peajes:5, estadoVia:2, tipoVia:0, condicionesVia:0, seguridad:1,    title:'id:99 ,distancia:310, tiempoRecorido:5, peajes:5, estadoVia:2, tipoVia:0, condicionesVia:0, seguridad:1'},
      {id: 100,from: 27, to: 49, distancia:302, tiempoRecorido:6, peajes:7, estadoVia:0, tipoVia:2, condicionesVia:1, seguridad:0,   title:'id:100 ,distancia:302, tiempoRecorido:6, peajes:7, estadoVia:0, tipoVia:2, condicionesVia:1, seguridad:0'},
      {id: 101,from: 49, to: 47, distancia:443, tiempoRecorido:8.33, peajes:9, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:1,title:'id:101 ,distancia:443, tiempoRecorido:8.33, peajes:9, estadoVia:1, tipoVia:0, condicionesVia:0, seguridad:1'},
      {id: 102,from: 17, to: 44, distancia:419, tiempoRecorido:6.3, peajes:6, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:1, title:'id:102 ,distancia:419, tiempoRecorido:6.3, peajes:6, estadoVia:2, tipoVia:1, condicionesVia:0, seguridad:1'},
      {id: 103,from: 27, to: 39, distancia:366, tiempoRecorido:6, peajes:8, estadoVia:0, tipoVia:2, condicionesVia:1, seguridad:1,   title:'id:103 ,distancia:366, tiempoRecorido:6, peajes:8, estadoVia:0, tipoVia:2, condicionesVia:1, seguridad:1'}

    ];     
/*
   var ciudades = [
        {id: 1, label: 'Ciudad 1'},
        {id: 2, label: 'Ciudad 2'},
        {id: 3, label: 'Ciudad 3'},
        {id: 4, label: 'Ciudad 4'},
        {id: 5, label: 'Ciudad 5'},
        {id: 6, label: 'Ciudad 6'},
        {id: 7, label: 'Ciudad 7'}
    ];

//     Arreglo de conexiones
    var caminos = [
        {id:1, from: 1, to: 2, distancia:10, tiempoRecorido:3, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0, title:'id:1, desde:ciudad 1, hasta: ciudad 2, distancia:10, tiempoRecorido:3,<br> peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0'},
        {id:2, from: 1, to: 4, distancia:300, tiempoRecorido:3, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0, title:'id:2, Desde:ciudad 1, to: ciudad 3, distancia:300, tiempoRecorido:3,<br> peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0'},
        {id:3, from: 1, to: 7, distancia:2, tiempoRecorido:3, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0, title:'id:3, Desde: Ciudad 1, Hasta: ciudad 4, distancia:300, tiempoRecorido:3,<br> peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0'},
        {id:4, from: 4, to: 5, distancia:300, tiempoRecorido:3, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0, title:'id:4, Desde:Ciudad 1, Hasta: Ciudad 5, distancia:300, tiempoRecorido:3, <br> peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0'},
        {id:5, from: 4, to: 6, distancia:300, tiempoRecorido:3, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0, title:'id:5, Desde:Ciudad 5, Hasta: Ciudad 2, distancia:300, tiempoRecorido:3, <br> peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0'},
        {id:6, from: 2, to: 3, distancia:300, tiempoRecorido:3, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0, title:'id:6, Desde: 3, hasta: 2, distancia:300, tiempoRecorido:3, peajes:3, <br> estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0'},
        {id:7, from: 2, to: 4, distancia:300, tiempoRecorido:3, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0, title:'id:4, Desde:Ciudad 1, Hasta: Ciudad 5, distancia:300, tiempoRecorido:3, <br> peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0'},
        {id:8, from: 7, to: 4, distancia:2, tiempoRecorido:3, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0, title:'id:5, Desde:Ciudad 5, Hasta: Ciudad 2, distancia:300, tiempoRecorido:3, <br> peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0'},
        {id:9, from: 6, to: 5, distancia:300, tiempoRecorido:3, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0, title:'id:6, Desde: 3, hasta: 2, distancia:300, tiempoRecorido:3, peajes:3, <br> estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0'},
        {id:10, from: 7, to: 6, distancia:300, tiempoRecorido:3, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0, title:'id:6, Desde: 3, hasta: 2, distancia:300, tiempoRecorido:3, peajes:3, <br> estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0'},
        {id:11, from: 1, to: 3, distancia:300, tiempoRecorido:3, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0, title:'id:3, Desde: Ciudad 1, Hasta: ciudad 4, distancia:300, tiempoRecorido:3,<br> peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0'},
        {id:12, from: 3, to: 7, distancia:300, tiempoRecorido:3, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0, title:'id:3, Desde: Ciudad 1, Hasta: ciudad 4, distancia:300, tiempoRecorido:3,<br> peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0'},
        {id:13, from: 2, to: 1, distancia:300, tiempoRecorido:3, peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0, title:'id:3, Desde: Ciudad 1, Hasta: ciudad 4, distancia:300, tiempoRecorido:3,<br> peajes:3, estadoVia:0, tipoVia:0, condicionesVia:0, seguridad:0'}
        
      ];
*/
//**************************************************************************
//                     Guardo en el localStorage                           *
//**************************************************************************
         
      var city =JSON.stringify(ciudades);
      localStorage.setItem("ciudades",city); 
      
      var path =JSON.stringify(caminos);
      localStorage.setItem("caminos",path); 
   
 

   
//**************************************************************************
//                     funcion dibujar                                    *
//**************************************************************************
      
   dibujar();
    function dibujar(){
        var contenedor = document.getElementById('grafico');
        var ObjCiudades=JSON.parse((localStorage.getItem("ciudades"))); 
        var ObjCaminos=JSON.parse((localStorage.getItem("caminos"))); 
 
        var datos_dibujo = {
            nodes: ObjCiudades,
            edges: ObjCaminos
        };
        var config = {}; //Se puede personalizar
    
        var grafico = new vis.Network(contenedor, datos_dibujo, config);

    }
 //Fin de la funcion Dibujar   
 
 
 //**************************************************************************
//                     funcion Cargar ciudades                              *
//**************************************************************************
      
   ciudadSelect();
    function ciudadSelect(){
        var ObjCiudades=JSON.parse((localStorage.getItem("ciudades"))); 
        
        $.each(ObjCiudades, function(key,i){
            $("#origen").append("<option class='form-control    ' value='"+i.id+"'>"+i.label+"</option>");
            $("#destino").append("<option class='form-control    ' value='"+i.id+"'>"+i.label+"</option>");
        });
      

    }
 //Fin de la funcion Dibujar
//**************************************************************************
//                     funcion Agregar NODOS                               *
//**************************************************************************

function agregar(){
  var ObjCiudades=JSON.parse((localStorage.getItem("ciudades")));
  var id= $('#id_nodo').val();
  var nombre= $('#nombre').val();
  ObjCiudades.push({id:id, label:nombre, title:"Ciudad "+id});
      var ObjCiudades =JSON.stringify(ObjCiudades);
      localStorage.setItem("ciudades",ObjCiudades); 
      ciudadSelect();
    dibujar();
    maximos();
}

//Fin añadir nodo    
   //**************************************************************************
   //                     funcion eliminar                                    *
   //**************************************************************************
   function eliminar(){
   //traigo los datos del localStorage
   var ObjCiudades=JSON.parse((localStorage.getItem("ciudades"))); 
   var ObjCiudadesAux=JSON.parse((localStorage.getItem("ciudades")));
   
   var ObjCaminos=JSON.parse((localStorage.getItem("caminos"))); 
   var Camin=[];   
       var w=parseInt($('#id_nodo').val());
      
    //comparo el nodo a eliminar con todos los nodos y solo lleno a ciudad con los diferentes   
    $.each(ObjCiudades, function (key, i) {
        if(w===i.id){
            //ciudad.push({id: i.id, label:i.label});
                  ObjCiudadesAux.splice(key,1); 
            
        }
    });
    //comparo el nodo a eliminar en ls caminos solo guardado los direfentes en una nueva variable Camin
    $.each(ObjCaminos, function (key, i) {
        if(w===i.from || w===i.to){}
        else{
         Camin.push({id:i.id, from: i.from, to: i.to, distancia:i.distancia, tiempoRecorido: i.tiempoRecorido, 
         peajes:i.peajes, estadoVia:i.estadoVia, tipoVia:i.tipoVia, condicionesVia:i.condicionesVia, seguridad:i.seguridad, 
         title:'id:'+i.id+', desde:ciudad '+i.from+', hasta: ciudad '+i.to+', distancia:'+i.distancia+', tiempoRecorido:'+i.tiempoRecorido+',<br>\n\
         peajes:'+i.peajes+', estadoVia:'+i.estadoVia+', tipoVia:'+i.tipoVia+', condicionesVia:'+i.condicionesVia+', seguridad:'+i.seguridad});   
        }
    });
   
//**************************************************************************
//                     Reemplazo en el localStorage                           *
//**************************************************************************
  
      var ObjCiudadesAux =JSON.stringify(ObjCiudadesAux);
      localStorage.setItem("ciudades",ObjCiudadesAux); 
      
      var Camin =JSON.stringify(Camin);
      localStorage.setItem("caminos",Camin); 
      
maximos();      
//Fin de Reemplazar en el localStorage 
  //llamo la funcion dibujar para la nueva estructura
   dibujar();
    
   };
// Fin de la Funcion elimnar nodoº

//**************************************************************************
//                     funcion MODIFICAR NODOS                               *
//**************************************************************************

function modificar(){
  var ObjCiudades=JSON.parse((localStorage.getItem("ciudades")));
  var ObjCiudadesAux=JSON.parse((localStorage.getItem("ciudades")));
  var id= parseInt($('#id_nodo').val());
  var nombre= $('#nombre').val();
  
  $.each(ObjCiudades,function(key,i){
      if(id===i.id){
        ObjCiudadesAux.splice(key,1,{id:id, label:nombre, title:"Ciudad "+i.id});  
      }
  });
 
      var ObjCiudadesAux =JSON.stringify(ObjCiudadesAux);
      localStorage.setItem("ciudades",ObjCiudadesAux); 
    dibujar();
    maximos();
}

//Fin añadir nodo    

//*****************CAMINOS*************************************************


//**************************************************************************
//                     funcion Agregar Caminos                               *
//**************************************************************************    
function agregarCamino(){
        var ObjCaminos=JSON.parse((localStorage.getItem("caminos")));
        
         var id= $('#id_camino').val();
         var desde= $('#desde').val();
         var hasta= $('#hasta').val();
         var distancia= $('#distancia').val();
         var tipo= $('#tipo').val();
         var tiempo= $('#tiempo').val();
         var peajes= $('#peajes').val();
         var estadoVia= $('#estadoVia').val();
         var tipoVia= $('#tipoVia').val();
         var condicionesVia= $('#condicionesVia').val();
         var seguridad= $('#seguridad').val();
         var titul="id:"+id+", from:"+desde+", to:"+hasta+", distancia:"+distancia+", tiempoRecorido:"+tiempo+", peajes:"+peajes+", estadoVia:"+estadoVia+", tipoVia:"+tipoVia+", condicionesVia:"+condicionesVia+", seguridad:"+condicionesVia+"";
         ObjCaminos.push({id:id, from: desde, to: hasta, distancia:distancia, tiempoRecorido:tiempo, peajes:peajes, estadoVia:estadoVia, tipoVia:tipoVia, condicionesVia:condicionesVia, seguridad:seguridad, title:titul});
             var ObjCaminos =JSON.stringify(ObjCaminos);
             localStorage.setItem("caminos",ObjCaminos); 
           dibujar();
           maximos();    
}

   //**************************************************************************
   //                     funcion eliminar CAMINOS                                 *
   //**************************************************************************
   function eliminarCamino(){
   //traigo los datos del localStorage
   var ObjCaminos= JSON.parse((localStorage.getItem("caminos"))); 
   var ObjCaminosAux= JSON.parse((localStorage.getItem("caminos")));   
   var Camin=[];   
   var w=parseInt($('#id_camino').val());
   
    //comparo el nodo a eliminar y lo elimino
    $.each(ObjCaminos, function (key, i) {
        if(w===i.id){
         ObjCaminosAux.splice(key,1);  
        }
    });
   
//**************************************************************************
//                     Reemplazo en el localStorage                           *
//**************************************************************************
  
      
      var ObjCaminosAux =JSON.stringify(ObjCaminosAux);
      localStorage.setItem("caminos",ObjCaminosAux); 
      
     
//Fin de Reemplazar en el localStorage 
//llamo la funcion dibujar para la nueva estructura
   dibujar();
   maximos();  
   };


//**************************************************************************
//                     funcion modifica Caminos                               *
//**************************************************************************    
function modificarCamino(){
        var ObjCaminos=JSON.parse((localStorage.getItem("caminos")));
        var ObjCaminosAux=JSON.parse((localStorage.getItem("caminos")));
        
         var id= parseInt($('#id_camino').val());
         var desde= $('#desde').val();
         var hasta= $('#hasta').val();
         var distancia= $('#distancia').val();
         var tipo= $('#tipo').val();
         var tiempo= $('#tiempo').val();
         var peajes= $('#peajes').val();
         var estadoVia= $('#estadoVia').val();
         var tipoVia= $('#tipoVia').val();
         var condicionesVia= $('#condicionesVia').val();
         var seguridad= $('#seguridad').val();
         var titul="id:"+id+", from:"+desde+", to:"+hasta+", distancia:"+distancia+", tiempoRecorido:"+tiempo+", peajes:"+peajes+", estadoVia:"+estadoVia+", tipoVia:"+tipoVia+", condicionesVia:"+condicionesVia+", seguridad:"+condicionesVia+"";
         
    $.each(ObjCaminos,function(key,i){
       if(id===i.id){
           ObjCaminosAux.splice(key,1,{id:id, from: desde, to: hasta, distancia:distancia, tiempoRecorido:tiempo, peajes:peajes, estadoVia:estadoVia, tipoVia:tipoVia, condicionesVia:condicionesVia, seguridad:seguridad, title:titul});
       } 
    });
          //inserto en el LocalStorage el nuevo dato 
           var ObjCaminosAux =JSON.stringify(ObjCaminosAux);
           localStorage.setItem("caminos",ObjCaminosAux); 
           dibujar();
           maximos();    
}


//***************************************************************************************************************************
//                     Obterner Rutas                                                                                        *                  
//***************************************************************************************************************************

var p=this;
function filtrarPorID(caminos) {
  if (('id' in caminos) && (caminos.from === p.inicial)) {
    return true;
  } else {
    return false;
  }
}
//this.grafoDijkstra.filter(filtrarPorID); 

function viajar(){
    
    var ObjP=JSON.parse((localStorage.getItem("caminos")));
    var ObjCiudades=JSON.parse((localStorage.getItem("ciudades")));
    var key=0, origen=document.getElementById("origen").value, hasta=document.getElementById("destino").value;
    var auxTo=0;
    var auxFrom=0;
    var aux="";
    var ruta=[];
    var ruta1=[];
    var distancia=0;
    var tiempo=0;
    var peajes=0;
    var estadoVia=0;
    var tipoVia=0;
    var condicionesVia=0;
    var seguridad=0; 
    var auxdistancia=0;
    var auxtiempo=0;
    var auxpeajes=0;
    var auxestadoVia=0;
    var auxtipoVia=0;
    var auxcondicionesVia=0;
    var auxseguridad=0;     
    var ob=0;
    var caminoOptimo=0;
    var rutaAux=[];
    var div=0;
    var g = new Graph();
    
    $.each(ObjCiudades, function (key, i) {
               auxTo=i.id;
                p.inicial=i.id;
                var contador=0;
                var nuevoOb=ObjP.filter(filtrarPorID);
                ruta1.push(nuevoOb);
               $.each(nuevoOb, function (key2, j) {
                  if(nuevoOb.length===key2+1){
                     distancia=j.distancia;
                     peajes=j.peajes;
                     estadoVia=j.estadoVia;
                     tipoVia=j.tipoVia;
                     condicionesVia=j.condicionesVia;
                     seguridad=j.seguridad;
                     tiempo=j.tiempoRecorido;
                     
                    if(j.estadoVia>0){
                      tiempo=tiempo-0.1;  
                    }else if(j.peajes>2){
                      tiempo=tiempo-0.1;   
                    }else if(j.condicionesVia>0){
                      tiempo=tiempo-0.1;   
                    }else if(j.tipoVia>0){
                      tiempo=tiempo-0.1;   
                    }
                     auxdistancia+=redondear(distancia);
                     auxpeajes+=peajes;
                     auxestadoVia+=estadoVia;
                     auxtipoVia+=tipoVia;
                     auxcondicionesVia+=condicionesVia;
                     auxseguridad+=seguridad; 
                     auxtiempo+=redondear(tiempo);
                     div+=1;
                     
                    rutaAux.push({distancia:parseFloat(redondear(auxdistancia*0.1)), tiempoRecorido:parseFloat(redondear(auxtiempo)), peajes:parseFloat(redondear(auxpeajes/div)), estadoVia:parseFloat(redondear(auxestadoVia/div)), tipoVia:parseFloat(redondear(auxtipoVia/div)), condicionesVia:parseFloat(redondear(auxcondicionesVia/div)), seguridad:parseFloat(redondear(auxseguridad/div))});
                    ob=parseFloat(redondear(distancia*0.1))+parseFloat(peajes)+parseFloat(estadoVia)+parseFloat(tipoVia)
                         +parseFloat(condicionesVia)+parseFloat(seguridad)+parseFloat(tiempo);
                     auxdistancia=0;
                     auxpeajes=0;
                     auxestadoVia=0;
                     auxtipoVia=0;
                     auxcondicionesVia=0;
                     auxseguridad=0; 
                     auxtiempo=0;
                    aux+='"'+j.to+'":'+ob+''; 
                    div+=1;
                  
                  }else{
                     distancia=j.distancia*0.1;
                     peajes=j.peajes;
                     estadoVia=j.estadoVia;
                     tipoVia=j.tipoVia;
                     condicionesVia=j.condicionesVia;
                     seguridad=j.seguridad;
                     tiempo=j.tiempoRecorido;
                    if(j.estadoVia>0){
                      tiempo=tiempo-0.1;  
                    }else if(j.peajes>2){
                      tiempo=tiempo-0.1;   
                    }else if(j.condicionesVia>0){
                      tiempo=tiempo-0.1;   
                    }else if(j.tipoVia>0){
                      tiempo=tiempo-0.1;   
                    }
                    div+=1;
                     auxdistancia+=redondear(distancia);
                     auxpeajes+=peajes;
                     auxestadoVia+=estadoVia;
                     auxtipoVia+=tipoVia;
                     auxcondicionesVia+=condicionesVia;
                     auxseguridad+=seguridad; 
                     auxtiempo+=redondear(tiempo);
                    contador+=1;
                    ob=parseFloat(redondear(distancia*0.1))+parseFloat(peajes)+parseFloat(estadoVia)+parseFloat(tipoVia)
                         +parseFloat(condicionesVia)+parseFloat(seguridad)+parseFloat(tiempo);
                    
                     aux+='"'+j.to+'":'+ob+',';    
                  }
                
               });
              
               aux =JSON.parse("{"+aux+"}");
               ruta.push(auxTo, aux);
               g.addVertex(auxTo,aux);
               aux="";
              
              
     }); 
     
     
        console.log(ruta);
        console.log(rutaAux);
        console.log(g.shortestPath(origen, hasta).concat([origen]).reverse());
        //array con las ciudades
        caminoOptimo=g.shortestPath(origen, hasta).concat([origen]).reverse();
        var cont="";
        
        for(var k=0;k<caminoOptimo.length;k++){
            $.each(ObjCiudades, function (key, i) {
             
                 var auxiliar=parseInt(caminoOptimo[k]);
                 if(auxiliar===i.id){
                  cont+=" <b>"+i.label+ "</b> >";   
                 }
                 
           });
            }
           //Aca muestro la ruta mas optima en el index OJOOOOO
           var tama=cont.length;
           cont=cont.substring(0,tama-1);
           console.log(cont);
           $("#ruta").html(cont);
           
           var graficar=[];
           var cont=0;
           for(var k=0;k<caminoOptimo.length;k++){
               if(cont===0){
                   var auxiliar=parseInt(caminoOptimo[k]);
                   var auxiliar2=parseInt(caminoOptimo[k+1]);
                   graficar.push({from:auxiliar, to: auxiliar2});
                   cont+=1;
               }else{
                    auxiliar=parseInt(caminoOptimo[k]);
                    auxiliar2=parseInt(caminoOptimo[k+1]);
                    if(!isNaN(auxiliar2)){
                   graficar.push({from:auxiliar, to: auxiliar2});
                    }
               }
            };
            
        var contenedor = document.getElementById('grafico');
        var ObjCiudades=JSON.parse((localStorage.getItem("ciudades"))); 
       
        var datos_dibujo = {
            nodes: ObjCiudades,
            edges: graficar
        };
        var config = {}; //Se puede personalizar
    
        var grafico = new vis.Network(contenedor, datos_dibujo, config);
           
          
 //********************************** extraere los valores de la ruta mas optima
                            distancia=0;
                            peajes=0;
                            estadoVia=0;
                            tipoVia=0;
                            condicionesVia=0;
                            seguridad=0;
                            tiempo=0;   
                            var rutaOptimaVariables=[];
            var conta=0;                
            $.each(graficar, function(key,i){
                   $.each(ObjP, function(key,j){
                     if(i.from===j.from && i.to===j.to){
                            distancia+=j.distancia*0.1;
                            peajes+=j.peajes;
                            estadoVia+=j.estadoVia;
                            tipoVia+=j.tipoVia;
                            condicionesVia+=j.condicionesVia;
                            seguridad+=j.seguridad;
                            tiempo+=j.tiempoRecorido;
                           if(j.estadoVia>0){
                             tiempo=tiempo-0.1;  
                           }else if(j.peajes>2){
                             tiempo=tiempo-0.1;   
                           }else if(j.condicionesVia>0){
                             tiempo=tiempo-0.1;   
                           }else if(j.tipoVia>0){
                             tiempo=tiempo-0.1;   
                           }
                           tiempo+=tiempo;
                           
                     }  
                   });
            });   
            conta=graficar.length;
           rutaOptimaVariables.push({distancia:redondear(distancia), tiempoRecorido:redondear(tiempo), peajes:peajes/conta, estadoVia:estadoVia/conta, tipoVia:tipoVia/conta, condicionesVia:condicionesVia/conta, seguridad:seguridad/conta});
            console.log(rutaOptimaVariables);                     
           
//****************************************************************************+*      
//                  proceso de Algoritmo gnetico
//******************************************************************************
    
    var generacion1=[];
    var distanciaAux=0, distanciaAux2=0, distanciaAuxf=0;
    var peajesAux=0,peajesAux2=0,peajesAuxf=0;
    var estadoViaAux=0,estadoViaAux2=0,estadoViaAuxf=0;
    var tipoViaAux, tipoViaAux2, tipoViaAuxf;
    var condicionesViaAux, condicionesViaAux2, condicionesViaAuxf;
    var seguridadAux, seguridadAux2, seguridadAuxf;
    var tiempoRecoridoAux,tiempoRecoridoAux2,tiempoRecoridoAuxf;
    var tiempoResiduo, distanciaResiduo ;
    var mutacion=0;
    var nuevaRutaOptima=[];
    var auxfuncionObj=1000;
    var vista=document.getElementById("vista");
    vista.innerHTML+="<b>Generacion 1</b> <br>";
    $.each(rutaOptimaVariables, function(key,i){
        $.each(rutaAux, function(k,j){
            if(k>5){
            if(k<10){
            distanciaResiduo= aBinario(i.distancia).residu;     
            distanciaAux= aBinario(i.distancia).nume;            
            distanciaAux2=aBinario(j.distancia).nume;
            distanciaAuxf=distanciaAux.substr(0,2)+mutacion+distanciaAux2.substr(5,10);
            k=k+1;
            vista.innerHTML+="Distancia 1 vs Ditancia "+parseInt(k-6)+"<br>";
            vista.innerHTML+=distanciaAux2 +" vs "+ distanciaAux+" ="+distanciaAuxf+"<br>";
            
            peajesAux= aBinario(i.peajes).nume;            
            peajesAux2=aBinario(j.peajes).nume;
            peajesAuxf=peajesAux.substr(0,4)+mutacion+peajesAux2.substr(4,10);
            
            vista.innerHTML+="Peaje 1 vs Peaje "+parseInt(k-6)+"<br>";
            vista.innerHTML+=peajesAux +" vs "+ peajesAux2+" ="+peajesAuxf+"<br>";
            
            estadoViaAux= aBinario(i.estadoVia).nume;            
            estadoViaAux2=aBinario(j.estadoVia).nume;
            estadoViaAuxf=estadoViaAux.substr(0,4)+mutacion+estadoViaAux2.substr(4,10);
    
            vista.innerHTML+="Estado Via 1 vs Estado Via "+parseInt(k-6)+"<br>";
            vista.innerHTML+=estadoViaAux +" vs "+ estadoViaAux2+" ="+estadoViaAuxf+"<br>";
    
            tipoViaAux= aBinario(i.tipoVia).nume;            
            tipoViaAux2=aBinario(j.tipoVia).nume;
            tipoViaAuxf=tipoViaAux.substr(0,4)+mutacion+tipoViaAux2.substr(4,10);
            
            vista.innerHTML+="Tipo Via 1 vs Tipo Via "+parseInt(k-6)+"<br>";
            vista.innerHTML+=tipoViaAux +" vs "+ tipoViaAux2+" ="+tipoViaAuxf+"<br>";
            
            condicionesViaAux= aBinario(i.condicionesVia).nume;            
            condicionesViaAux2=aBinario(j.condicionesVia).nume;
            condicionesViaAuxf=condicionesViaAux.substr(0,4)+mutacion+condicionesViaAux2.substr(4,10);
            
            vista.innerHTML+="Condiciones Via 1 vs Condiciones Via "+parseInt(k-6)+"<br>";
            vista.innerHTML+=condicionesViaAux +" vs "+ condicionesViaAux2+" ="+condicionesViaAuxf+"<br>";

            seguridadAux= aBinario(i.seguridad).nume;            
            seguridadAux2=aBinario(j.seguridad).nume;
            seguridadAuxf=seguridadAux.substr(0,4)+mutacion+seguridadAux2.substr(4,10);
            
            vista.innerHTML+="Seguridad Via 1 vs Seguridad "+parseInt(k-6)+"<br>";
            vista.innerHTML+=seguridadAux +" vs "+ seguridadAux2+" ="+seguridadAuxf+"<br>";
            
            tiempoResiduo= aBinario(i.tiempoRecorido).residu;
            tiempoRecoridoAux= aBinario(i.tiempoRecorido).nume;            
            tiempoRecoridoAux2=aBinario(j.tiempoRecorido).nume;
            tiempoRecoridoAuxf=tiempoRecoridoAux.substr(0,4)+mutacion+tiempoRecoridoAux2.substr(4,10);
            
            vista.innerHTML+="Tiempo Recorido Via 1 vs Tiempo Recorido "+parseInt(k-6)+"<br>";
            vista.innerHTML+=tiempoRecoridoAux +" vs "+ tiempoRecoridoAux2+" ="+tiempoRecoridoAuxf+"<br>";
            
           
             if(distanciaResiduo===1){
                distanciaResiduo=5;
            }
            if(tiempoResiduo===1){
                tiempoResiduo=5;
            }
            vista.innerHTML+="Para un resultado "+"Distancia: "+parseFloat(Adecimal(distanciaAuxf)+"."+distanciaResiduo)
                             +" Tiempo Recorrido: "+parseFloat(Adecimal(tiempoRecoridoAuxf)+"."+tiempoResiduo)
                             +" Peajes: "+ Adecimal(peajesAuxf)+" Estado Via: "+Adecimal(estadoViaAuxf)
                             +" Tipo Via: "+Adecimal(tipoViaAuxf)+ " Condicion de via "+Adecimal(condicionesViaAuxf)
                             +" Seguridad: "+Adecimal(seguridadAuxf)+"<br><br>";
            var funcionObjetivo= parseFloat(Adecimal(distanciaAuxf)+"."+distanciaResiduo)+ parseFloat(Adecimal(tiempoRecoridoAuxf)+"."+tiempoResiduo)+
                                 parseFloat(Adecimal(peajesAuxf))+parseFloat(Adecimal(estadoViaAuxf))+parseFloat(Adecimal(tipoViaAuxf))+
                                 parseFloat(Adecimal(condicionesViaAuxf))+parseFloat(Adecimal(seguridadAuxf));
            vista.innerHTML+="La funcion Objetivo seria "+ funcionObjetivo+"<br>";
            
            if(auxfuncionObj> funcionObjetivo){
               auxfuncionObj=funcionObjetivo;
               nuevaRutaOptima=[];
               nuevaRutaOptima.push({distancia:parseFloat(Adecimal(distanciaAuxf)+"."+distanciaResiduo), tiempoRecorido:parseFloat(Adecimal(tiempoRecoridoAuxf)+"."+tiempoResiduo), peajes:Adecimal(peajesAuxf), estadoVia:Adecimal(estadoViaAuxf), tipoVia:Adecimal(tipoViaAuxf), condicionesVia:Adecimal(condicionesViaAuxf), seguridad:Adecimal(seguridadAuxf)});
              ;
            }
            
            generacion1.push({distancia:parseFloat(Adecimal(distanciaAuxf)+"."+distanciaResiduo), tiempoRecorido:parseFloat(Adecimal(tiempoRecoridoAuxf)+"."+tiempoResiduo), peajes:Adecimal(peajesAuxf), estadoVia:Adecimal(estadoViaAuxf), tipoVia:Adecimal(tipoViaAuxf), condicionesVia:Adecimal(condicionesViaAuxf), seguridad:Adecimal(seguridadAuxf)});
            tiempoResiduo=0;
            distanciaResiduo=0;
            }else{
                return false;
            }
        }
        });  
    });
   console.log("nueva ruta optima\n\ ");
   console.log(nuevaRutaOptima);
   var nuevaRutaOptimaSgt=[];
   auxfuncionObj=1000;
    //Calculamos las demas Generaciones
    var generacionSgt=[];
    
    for(h=1;h<5;h++){
    vista.innerHTML+="<br><b>Generacion "+parseInt(h+1) +"</b><br>";    
 $.each(nuevaRutaOptima, function(key,i){
        $.each(generacion1, function(k,j){
            if(k<4){
            distanciaResiduo= aBinario(i.distancia).residu;     
            distanciaAux= aBinario(i.distancia).nume;            
            distanciaAux2=aBinario(j.distancia).nume;
            distanciaAuxf=distanciaAux.substr(0,4)+mutacion+distanciaAux2.substr(4,10);
            k=k+1;
            vista.innerHTML+="Distancia 1 vs Ditancia "+k+"<br>";
            vista.innerHTML+=distanciaAux +" vs "+ distanciaAux2+" ="+distanciaAuxf+"<br>";
            
            peajesAux= aBinario(i.peajes).nume;            
            peajesAux2=aBinario(j.peajes).nume;
            peajesAuxf=peajesAux.substr(0,4)+mutacion+peajesAux2.substr(4,10);
            
            vista.innerHTML+="Peaje 1 vs Peaje "+k+"<br>";
            vista.innerHTML+=peajesAux +" vs "+ peajesAux2+" ="+peajesAuxf+"<br>";
            
            estadoViaAux= aBinario(i.estadoVia).nume;            
            estadoViaAux2=aBinario(j.estadoVia).nume;
            estadoViaAuxf=estadoViaAux.substr(0,4)+mutacion+estadoViaAux2.substr(4,10);
    
            vista.innerHTML+="Estado Via 1 vs Estado Via "+k+"<br>";
            vista.innerHTML+=estadoViaAux +" vs "+ estadoViaAux2+" ="+estadoViaAuxf+"<br>";
    
            tipoViaAux= aBinario(i.tipoVia).nume;            
            tipoViaAux2=aBinario(j.tipoVia).nume;
            tipoViaAuxf=tipoViaAux.substr(0,4)+mutacion+tipoViaAux2.substr(4,10);
            
            vista.innerHTML+="Tipo Via 1 vs Tipo Via "+k+"<br>";
            vista.innerHTML+=tipoViaAux +" vs "+ tipoViaAux2+" ="+tipoViaAuxf+"<br>";
            
            condicionesViaAux= aBinario(i.condicionesVia).nume;            
            condicionesViaAux2=aBinario(j.condicionesVia).nume;
            condicionesViaAuxf=condicionesViaAux.substr(0,4)+mutacion+condicionesViaAux2.substr(4,10);
            
            vista.innerHTML+="Condiciones Via 1 vs Condiciones Via "+k+"<br>";
            vista.innerHTML+=condicionesViaAux +" vs "+ condicionesViaAux2+" ="+condicionesViaAuxf+"<br>";

            seguridadAux= aBinario(i.seguridad).nume;            
            seguridadAux2=aBinario(j.seguridad).nume;
            seguridadAuxf=seguridadAux.substr(0,4)+mutacion+seguridadAux2.substr(4,10);
            
            vista.innerHTML+="Seguridad Via 1 vs Seguridad "+k+"<br>";
            vista.innerHTML+=seguridadAux +" vs "+ seguridadAux2+" ="+seguridadAuxf+"<br>";
            
            tiempoResiduo= aBinario(i.tiempoRecorido).residu;
            tiempoRecoridoAux= aBinario(i.tiempoRecorido).nume;            
            tiempoRecoridoAux2=aBinario(j.tiempoRecorido).nume;
            tiempoRecoridoAuxf=tiempoRecoridoAux.substr(0,4)+mutacion+tiempoRecoridoAux2.substr(4,10);
            
            vista.innerHTML+="Tiempo Recorido Via 1 vs Tiempo Recorido "+k+"<br>";
            vista.innerHTML+=tiempoRecoridoAux +" vs "+ tiempoRecoridoAux2+" ="+tiempoRecoridoAuxf+"<br>";
            
           
             if(distanciaResiduo===1){
                distanciaResiduo=5;
            }
            if(tiempoResiduo===1){
                tiempoResiduo=5;
            }
            vista.innerHTML+="Para un resultado "+"Distancia: "+parseFloat(Adecimal(distanciaAuxf)+"."+distanciaResiduo)
                             +" Tiempo Recorrido: "+parseFloat(Adecimal(tiempoRecoridoAuxf)+"."+tiempoResiduo)
                             +" Peajes: "+ Adecimal(peajesAuxf)+" Estado Via: "+Adecimal(estadoViaAuxf)
                             +" Tipo Via: "+Adecimal(tipoViaAuxf)+ " Condicion de via "+Adecimal(condicionesViaAuxf)
                             +" Seguridad: "+Adecimal(seguridadAuxf)+"<br>";
            
            var funcionObjetivo= parseFloat(Adecimal(distanciaAuxf)+"."+distanciaResiduo)+ parseFloat(Adecimal(tiempoRecoridoAuxf)+"."+tiempoResiduo)+
                                 parseFloat(Adecimal(peajesAuxf))+parseFloat(Adecimal(estadoViaAuxf))+parseFloat(Adecimal(tipoViaAuxf))+
                                 parseFloat(Adecimal(condicionesViaAuxf))+parseFloat(Adecimal(seguridadAuxf));
            vista.innerHTML+="La funcion Objetivo seria "+ funcionObjetivo+"<br>";
            if(auxfuncionObj> funcionObjetivo){
               auxfuncionObj=funcionObjetivo;
               nuevaRutaOptimaSgt=[];
               nuevaRutaOptimaSgt.push({distancia:parseFloat(Adecimal(distanciaAuxf)+"."+distanciaResiduo), tiempoRecorido:parseFloat(Adecimal(tiempoRecoridoAuxf)+"."+tiempoResiduo), peajes:Adecimal(peajesAuxf), estadoVia:Adecimal(estadoViaAuxf), tipoVia:Adecimal(tipoViaAuxf), condicionesVia:Adecimal(condicionesViaAuxf), seguridad:Adecimal(seguridadAuxf)});
              ;
            }
            
            generacionSgt.push({distancia:parseFloat(Adecimal(distanciaAuxf)+"."+distanciaResiduo), tiempoRecorido:parseFloat(Adecimal(tiempoRecoridoAuxf)+"."+tiempoResiduo), peajes:Adecimal(peajesAuxf), estadoVia:Adecimal(estadoViaAuxf), tipoVia:Adecimal(tipoViaAuxf), condicionesVia:Adecimal(condicionesViaAuxf), seguridad:Adecimal(seguridadAuxf)});
            tiempoResiduo=0;
            distanciaResiduo=0;
            }else{
                return false;
            }
            
        });  
    });
    
       nuevaRutaOptima=[];    
      generacion1=generacionSgt;  
      nuevaRutaOptima=nuevaRutaOptimaSgt;
    }
    console.log(nuevaRutaOptimaSgt);
   console.log(generacion1);      
     
}

//*******************************************************************************
//                                  FIN DE FUNCION VIAJAR
//******************************************************************************                                  
 
     function aBinario(num){
         num=num.toString();
        var final=0;       
        var pos =num.indexOf(".");
        var res1=num.substring(0, pos);
        var res = num.substring(pos+1);

        if(pos===-1){
            num=parseFloat(num);
            final=num.toString(2);
            var tamaño=final.length;
            if(tamaño===1){
                final= "000000000" + final;
            }else if(tamaño===2){
                final= "00000000" + final; 
            }else if(tamaño===3){
               final= "0000000" + final;  
            }else if(tamaño===4){
               final= "000000" + final;  
            }else if(tamaño===5){
               final= "00000" + final;  
            }else if(tamaño===6){
               final= "0000" + final;  
            }else if(tamaño===7){
               final= "000" + final;  
            }else if(tamaño===8){
               final= "00" + final;  
            }else if(tamaño===9){
               final= "0" + final;  
            }
            
            final=final.toString();
        return{nume: final, residu:0}; 
        
        }else{
            final=parseFloat(res1).toString(2);
            var final2=1;
            final=final.toString();
            var tamaño=final.length;
             if(tamaño===1){
                final= "000000000" + final;
            }else if(tamaño===2){
                final= "00000000" + final; 
            }else if(tamaño===3){
               final= "0000000" + final;  
            }else if(tamaño===4){
               final= "000000" + final;  
            }else if(tamaño===5){
               final= "00000" + final;  
            }else if(tamaño===6){
               final= "0000" + final;  
            }else if(tamaño===7){
               final= "000" + final;  
            }else if(tamaño===8){
               final= "00" + final;  
            }else if(tamaño===9){
               final= "0" + final;  
            }   
            final=final.toString();
        return {nume:final, residu:1};
       }    
 };
 function Adecimal(num){
     var bin="";
     bin = parseInt(num, 2);
     return bin;
}
 
 
 function redondear(num){
        var final=0;
        num=num.toString();
        var pos =num.indexOf(".");
        var res1=num.substring(0, pos+1);
        var res = num.substring(pos+1);
        res=parseFloat(res);
        if(res>=25){
         final=res1+5;   
        }
        if(res<25){
          final=res1+"0";  
        }
        if(res<=75 && res >=25){
            final=res1+5;
        }
        if(res>75){
            final=parseFloat(res1)+1+.0;
        }
        
        if(pos===-1){
        return num;   
        }else{
        final=parseFloat(final);
        return final;
       }
    }


//**************************************************************************
//                     Obtenert el maximo de caminos                       *                  
//**************************************************************************
maximos();
function maximos(){
    
    var ObjP=JSON.parse((localStorage.getItem("ciudades")));
    var ObjCaminos=JSON.parse((localStorage.getItem("caminos")));  
    var maxCiudades=0;
    var maxCaminos=0;
    
     $.each(ObjP, function (key, i) {
         if(maxCiudades<i.id){
             maxCiudades= i.id; 
         }
     }); 

     $.each(ObjCaminos, function (key, i) {
         if(maxCaminos<=i.id)
         maxCaminos= i.id; 
     });

      var maxCiudades=parseInt(maxCiudades)+parseInt(1);
      var maxCaminos=parseInt(maxCaminos)+parseInt(1);
      
     $('#id_nodo').val(maxCiudades);
     $('#nombre').val("Ciudad "+maxCiudades);
     $('#id_camino').val(maxCaminos);
     
   
}


//Fin obtener el max



