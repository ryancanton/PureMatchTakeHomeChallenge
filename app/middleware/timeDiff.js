function timeDiff(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
      return Math.floor(interval) + "yr ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
      return Math.floor(interval) + "m ago";
  }
  interval = seconds / 604800;
  if (interval > 1) {
      return Math.floor(interval) + "w ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
      return Math.floor(interval) + "d ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
      return Math.floor(interval) + "h ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
      return Math.floor(interval) + "m ago";
  }
  return Math.floor(seconds) + "s ago";
}
module.exports = timeDiff;
