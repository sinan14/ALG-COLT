function power(num, p) {
  if (p === 0) return 1;
  return num * power(num, p - 1);
}
power(2, 4);
//done
