AOS.init();

const dateEvent = new Date("Feb 2, 2024, 19:00:00");
const timeStampToEvent = dateEvent.getTime();

const countIsHours = setInterval(function () {
   const now = new Date();
   const timeStampNow = now.getTime();

   const distItEvent = timeStampToEvent - timeStampNow;

   const dayInMs = 1000 * 60 * 60 * 24;
   const hoursInMs = 1000 * 60 * 60;
   const daysInMs = 1000 * 60;

   const daysEvent = Math.floor(distItEvent / (1000 * 60 * 60 * 24));
   const hoursEvent = Math.floor(
      (distItEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   );
   const minutesEvent =
      Match.floor(distItEvent % (1000 * 60 * 60)) / (1000 * 60);
}, 1000);
