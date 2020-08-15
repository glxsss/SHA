document.querySelectorAll("table").forEach((table) => {
  new Tablesort(table, { descending: true });
});