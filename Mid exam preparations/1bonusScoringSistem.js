function bonusScoringSisytem(array) {
  let studentsCount = Number(array.shift());
  let totalCountLectures = Number(array.shift());
  let addditionalBonus = Number(array.shift());

  let maxBonus = 0;
  let hightAttendances = 0;

  for (let i = 0; i < array.length; i++) { // studentsCount = array.length
    let attendances = array[i];
    let totalBonus = (attendances / totalCountLectures) * (5 + addditionalBonus);
    if (totalBonus >= maxBonus) {
      maxBonus = totalBonus;
      hightAttendances = attendances;
    }
  }
  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${hightAttendances} lectures.`);

}
bonusScoringSisytem(['5', '25', '30',
  '12', '19', '24', '16', '20'])
bonusScoringSisytem(['10', '30', '14',
  '8', '23', '27', '28', '15', '17', '25', '26', '5', '18'])
