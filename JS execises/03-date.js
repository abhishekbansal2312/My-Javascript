function getCurrentDate() {
  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth() + 1; 
  const year = now.getFullYear();

  const dayFormatted = day < 10 ? "0" + day : day;
  const monthFormatted = month < 10 ? "0" + month : month;


  const dateFormat1 = `${monthFormatted}-${dayFormatted}-${year}`;
  const dateFormat2 = `${monthFormatted}/${dayFormatted}/${year}`;
  const dateFormat3 = `${dayFormatted}-${monthFormatted}-${year}`;
  const dateFormat4 = `${dayFormatted}/${monthFormatted}/${year}`;

  console.log(`mm-dd-yyyy: ${dateFormat1}`);
  console.log(`mm/dd/yyyy: ${dateFormat2}`);
  console.log(`dd-mm-yyyy: ${dateFormat3}`);
  console.log(`dd/mm/yyyy: ${dateFormat4}`);
}
getCurrentDate();
