function FormatDate() {
  const date = new Date();
  const dayWeek = weekDay(date.getDay());
  function weekDay(day) {
    switch (day) {
      case 0:
        return "Domingo";
      case 1:
        return "Segunda";
      case 2:
        return "Terça";
      case 3:
        return "Quarta";
      case 4:
        return "Quinta";
      case 5:
        return "Sexta";
      case 6:
        return "Sábado";
    }
  }
  let month = String(date.getMonth() + 1).padStart(2, '0');
  const dayNumber = String(date.getDate()).padStart(2, '0');
  return <h2>{`${dayWeek}, ${dayNumber}/${month}`}</h2>;
}

export default FormatDate;
