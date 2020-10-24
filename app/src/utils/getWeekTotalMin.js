export default function getWeekTotalMin(
  initalHour,
  initialMin,
  finalHour,
  finalMin
) {
  const intialHourToMin = Number(initalHour) * 60;
  initialMin = Number(initialMin);
  const finalHourToMin = Number(finalHour) * 60;
  finalMin = Number(finalMin);

  const initalTimeMin = intialHourToMin + initialMin;
  const finalTimeMin = finalHourToMin + finalMin;

  const totalTimeMin = finalTimeMin - initalTimeMin;
  return totalTimeMin * 7;
}
