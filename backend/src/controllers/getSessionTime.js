export default async function getSessionTime(startTime, endTime) {
  const formattedStartTime = new Date(startTime).getTime();
  const fomrattedEndTime = new Date(endTime).getTime();
  const timeDifference = fomrattedEndTime - formattedStartTime;
  const secondsElapsed = timeDifference / 1000;
  return secondsElapsed;
}
