function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  result.sort((x, y) => {
    if(x.year < y.year){
      return -1;
    }
    if (x.year > y.year){
      return 1;
    }

    return 0;
  });

  return result;
}
