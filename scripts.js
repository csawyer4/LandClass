// var classes = ["Buildings", "Trees", "Roads", "Ground"]
// var squareft = [22902518, 18225273, 13373085, 19793038]
// var colors =["#ac3973", "#008000", "#b3cccc", "#80ff80"]

var landData = {
  labels: [
    "Ground",
  "Trees",
  "Roads",
  "Buildings"
  ],
  datasets: [
    {
      data: [27.01, 24.88, 18.26, 29.85],
      backgroundColor: [
        "#80ff80",
        "#008000",
        "#999999",
        "#cc9966"
      ]
    }]
};
var ctx = document.getElementById("landClass");
var landClass = new Chart(ctx, {
  type: "pie",
  data: landData
});
