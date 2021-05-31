const calculateDaysFromNow = date => Math.floor(Math.abs(new Date() - new Date(date)) / 864e5);

export default calculateDaysFromNow;
