const examSchedule = [
  { classTime: "MWF 9:00 a.m. - 9:50 a.m.", examDate: "Friday, December 6", examTime: "8:00 a.m. - 9:45 a.m." },
  { classTime: "TR 11:00 a.m. - 12:15 p.m.", examDate: "Friday, December 6", examTime: "10:15 a.m. - 12 Noon" },
  { classTime: "TR 11:00 a.m. - 11:50 a.m.", examDate: "Friday, December 6", examTime: "10:15 a.m. - 12 Noon" },
  { classTime: "MWF 2:00 p.m. - 2:50 p.m.", examDate: "Friday, December 6", examTime: "1:00 p.m. - 2:45 p.m." },
  { classTime: "MW 2:00 p.m. - 3:15 p.m.", examDate: "Friday, December 6", examTime: "1:00 p.m. - 2:45 p.m." },
  { classTime: "TR 10:00 a.m. - 10:50 a.m.", examDate: "Friday, December 6", examTime: "3:15 p.m. - 5:00 p.m." },
  { classTime: "MWF 10:00 a.m. - 10:50 a.m.", examDate: "Monday, December 9", examTime: "8:00 a.m. - 9:45 a.m." },
  { classTime: "TR 9:30 a.m. - 10:45 a.m.", examDate: "Monday, December 9", examTime: "10:15 a.m. - 12 Noon" },
  { classTime: "TR 9:00 a.m. - 9:50 a.m.", examDate: "Monday, December 9", examTime: "10:15 a.m. - 12 Noon" },
  { classTime: "MWF 1:00 p.m. - 1:50 p.m.", examDate: "Monday, December 9", examTime: "1:00 p.m. - 2:45 p.m." },
  { classTime: "MWF 8:00 a.m. - 8:50 a.m.", examDate: "Monday, December 9", examTime: "3:15 p.m. - 5:00 p.m." },
  { classTime: "TR 8:00 a.m. - 9:15 a.m.", examDate: "Tuesday, December 10", examTime: "8:00 a.m. - 9:45 a.m." },
  { classTime: "TR 8:00 a.m. - 8:50 a.m.", examDate: "Tuesday, December 10", examTime: "8:00 a.m. - 9:45 a.m." },
  { classTime: "MWF 11:00 a.m. - 11:50 a.m.", examDate: "Tuesday, December 10", examTime: "10:15 a.m. - 12 Noon" },
  { classTime: "TR 2:00 p.m. - 3:15 p.m.", examDate: "Tuesday, December 10", examTime: "1:00 p.m. - 2:45 p.m." },
  { classTime: "TR 2:00 p.m. - 2:50 p.m.", examDate: "Tuesday, December 10", examTime: "1:00 p.m. - 2:45 p.m." },
  { classTime: "MWF 3:00 p.m. - 3:50 p.m.", examDate: "Tuesday, December 10", examTime: "3:15 p.m. - 5:00 p.m." },
  { classTime: "MW 3:00 p.m. - 4:15 p.m.", examDate: "Tuesday, December 10", examTime: "3:15 p.m. - 5:00 p.m." },
  { classTime: "MWF 12 Noon - 12:50 p.m.", examDate: "Wednesday, December 11", examTime: "8:00 a.m. - 9:45 a.m." },
  { classTime: "TR 12:30 p.m. - 1:45 p.m.", examDate: "Wednesday, December 11", examTime: "10:15 a.m. - 12 Noon" },
  { classTime: "TR 12 Noon - 12:50 p.m.", examDate: "Wednesday, December 11", examTime: "10:15 a.m. - 12 Noon" },
  { classTime: "MWF 4:00 p.m. - 5:15 p.m.", examDate: "Wednesday, December 11", examTime: "10:15 a.m. - 12 Noon" },
  { classTime: "TR 1:00 p.m. - 1:50 p.m.", examDate: "Wednesday, December 11", examTime: "1:00 p.m. - 2:45 p.m." },
  { classTime: "TR 3:00 p.m. - 3:50 p.m.", examDate: "Wednesday, December 11", examTime: "3:15 p.m. - 5:00 p.m." },
];


const dropdown = document.getElementById("classDropdown");
examSchedule.forEach((item, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = item.classTime;
  dropdown.appendChild(option);
});

const examDate = document.getElementById("examDate");
const examTime = document.getElementById("examTime");
dropdown.addEventListener("change", () => {
  const selectedIndex = dropdown.value;
  if (selectedIndex !== "") {
    examDate.textContent = examSchedule[selectedIndex].examDate;
    examTime.textContent = examSchedule[selectedIndex].examTime;
  }
});