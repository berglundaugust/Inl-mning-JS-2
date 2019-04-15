$(function () {
  'use strict';

  if ($("#welcome").length) {
    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.response);

        let fullname = ("Hejsan!") + " " + object.firstname + " " + object.lastname;

        $("#name").text(`${fullname}`);

      }

    }
    request.open("GET", "https://fe18.azurewebsites.net/api/user", true);
    request.send();
  };

  if ($("#greenBox").length) {
    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.response);

        let salesamount = object.amount + " " + object.currency;

        $("#green-amount").text(`${salesamount}`);
        $("#green-month").text(`${object.period}`);

      }

    }
    request.open("GET", "https://fe18.azurewebsites.net/api/totalsales", true);
    request.send();
  };

  if ($("#blueBox").length) {
    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.response);

        let salesamount = object.amount + " " + object.currency;

        $("#blue-amount").text(`${salesamount}`);
        $("#blue-month").text(`${object.period}`);

      }

    }
    request.open("GET", "https://fe18.azurewebsites.net/api/totalpurchases", true);
    request.send();
  };

  if ($("#redBox").length) {
    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.response);

        let salesamount = object.amount + " " + object.currency;

        $("#red-amount").text(`${salesamount}`);
        $("#red-month").text(`${object.period}`);

      }

    }
    request.open("GET", "https://fe18.azurewebsites.net/api/totalorders", true);
    request.send();
  };

  if ($("#orangeBox").length) {
    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.response);

        let salesamount = object.amount + " " + object.currency;

        $("#orange-amount").text(`${salesamount}`);
        $("#orange-month").text(`${object.period}`);

      }

    }
    request.open("GET", "https://fe18.azurewebsites.net/api/totalgrowth", true);
    request.send();
  };

  if ($("#total-sales-chart").length) {

    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.response);

        $("#revenueNr").text(`${object.revenue}`);
        $("#returnsNr").text(`${object.returns}`);
        $("#queriesNr").text(`${object.queries}`);
        $("#invoicesNr").text(`${object.invoices}`);



        var areaData = {
          labels: object.labels,
          datasets: [
            {
              data: object.datasets[0].data,
              backgroundColor: [
                'rgba(61, 165, 244, .0)'
              ],
              borderColor: [
                'rgb(61, 165, 244)'
              ],
              borderWidth: 2,
              fill: 'origin',
              label: object.datasets[0].label,
            },
            {
              data: object.datasets[1].data,
              backgroundColor: [
                'rgba(241, 83, 110, .0)'
              ],
              borderColor: [
                'rgb(241, 83, 110)'
              ],
              borderWidth: 2,
              fill: 'origin',
              label: object.datasets[1].label,
            }
          ]
        };
        var areaOptions = {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            filler: {
              propagate: false
            }
          },
          scales: {
            xAxes: [{
              display: true,
              ticks: {
                display: true,
                padding: 20,
                fontColor: "#000",
                fontSize: 14
              },
              gridLines: {
                display: false,
                drawBorder: false,
                color: 'transparent',
                zeroLineColor: '#eeeeee'
              }
            }],
            yAxes: [{
              display: true,
              ticks: {
                display: true,
                autoSkip: false,
                maxRotation: 0,
                stepSize: 100,
                fontColor: "#000",
                fontSize: 14,
                padding: 18,
                stepSize: 100000,
                callback: function (value) {
                  var ranges = [
                    { divider: 1e6, suffix: 'M' },
                    { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                    for (var i = 0; i < ranges.length; i++) {
                      if (n >= ranges[i].divider) {
                        return (n / ranges[i].divider).toString() + ranges[i].suffix;
                      }
                    }
                    return n;
                  }
                  return formatNumber(value);
                }
              },
              gridLines: {
                drawBorder: false
              }
            }]
          },
          legend: {
            display: false
          },
          tooltips: {
            enabled: true
          },
          elements: {
            line: {
              tension: .37
            },
            point: {
              radius: 0
            }
          }
        }
        var revenueChartCanvas = $("#total-sales-chart").get(0).getContext("2d");
        var revenueChart = new Chart(revenueChartCanvas, {
          type: 'line',
          data: areaData,
          options: areaOptions
        });
      }

    }

    request.open("GET", "https://fe18.azurewebsites.net/api/totalsaleschart", true);
    request.send();
  };


  if ($("#users-chart").length) {

    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.response);

        $("#userNr").text(`${object.users}`);
        $("#userProcent").text(`${object.growth}`);
        $("#userSells").text(`${object.datasets[0].label}`);


        var areaData = {
          labels: object.labels,
          datasets: [{
            data: object.datasets[0].data,
            backgroundColor: [
              '#e0fff4'
            ],
            borderWidth: 2,
            borderColor: "#00c689",
            fill: 'origin',
            label: object.datasets.label,
          }
          ]
        };
        var areaOptions = {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            filler: {
              propagate: false
            }
          },
          scales: {
            xAxes: [{
              display: false,
              ticks: {
                display: true
              },
              gridLines: {
                display: false,
                drawBorder: false,
                color: 'transparent',
                zeroLineColor: '#eeeeee'
              }
            }],
            yAxes: [{
              display: false,
              ticks: {
                display: true,
                autoSkip: false,
                maxRotation: 0,
                stepSize: 100,
                min: 0,
                max: 300
              },
              gridLines: {
                drawBorder: false
              }
            }]
          },
          legend: {
            display: false
          },
          tooltips: {
            enabled: true
          },
          elements: {
            line: {
              tension: .35
            },
            point: {
              radius: 0
            }
          }
        }
        var salesChartCanvas = $("#users-chart").get(0).getContext("2d");
        var salesChart = new Chart(salesChartCanvas, {
          type: 'line',
          data: areaData,
          options: areaOptions
        });

      }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/userschart", true);
    request.send();
  };

  if ($("#projects-chart").length) {

    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.response);

        $("#projectNr").text(`${object.procent}`);
        $("#projectProcent").text(`${object.growth}`);
        $("#projectSells").text(`${object.datasets[0].label}`);

        var areaData = {
          labels: object.labels,
          datasets: [{
            data: object.datasets[0].data,
            backgroundColor: [
              '#e0fff4'
            ],
            borderWidth: 2,
            borderColor: "#00c689",
            fill: 'origin',
            label: object.datasets.label,
          }
          ]
        };
        var areaOptions = {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            filler: {
              propagate: false
            }
          },
          scales: {
            xAxes: [{
              display: false,
              ticks: {
                display: true
              },
              gridLines: {
                display: false,
                drawBorder: false,
                color: 'transparent',
                zeroLineColor: '#eeeeee'
              }
            }],
            yAxes: [{
              display: false,
              ticks: {
                display: true,
                autoSkip: false,
                maxRotation: 0,
                stepSize: 100,
                min: 0,
                max: 300
              },
              gridLines: {
                drawBorder: false
              }
            }]
          },
          legend: {
            display: false
          },
          tooltips: {
            enabled: true
          },
          elements: {
            line: {
              tension: .05
            },
            point: {
              radius: 0
            }
          }
        }
        var salesChartCanvas = $("#projects-chart").get(0).getContext("2d");
        var salesChart = new Chart(salesChartCanvas, {
          type: 'line',
          data: areaData,
          options: areaOptions
        });
      }

    }
    request.open("GET", "https://fe18.azurewebsites.net/api/projectschart", true);
    request.send();
  };

  if ($('#offlineProgress').length) {

    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.response);

        $("#offline").text(`${object.offline}`);
        $("#online").text(`${object.online}`);


        var bar = new ProgressBar.Circle(offlineProgress, {
          color: '#000',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 6,
          trailWidth: 6,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: true,
            style: {
              color: "#fff",
              position: 'absolute',
              left: '40%',
              top: '50%'
            }
          },
          svgStyle: {
            width: '90%'
          },
          from: {
            color: '#f1536e',
            width: 6
          },
          to: {
            color: '#f1536e',
            width: 6
          },

          step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
              circle.setText('');
            } else {
              circle.setText(value);
            }

          }
        });

        bar.text.style.fontSize = '1rem';
        bar.animate(.64); 
      }

      if ($('#onlineProgress').length) {
        var bar = new ProgressBar.Circle(onlineProgress, {
          color: '#000',
    
          strokeWidth: 6,
          trailWidth: 6,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: true,
            style: {
              color: "#fff",
              position: 'absolute',
              left: '40%',
              top: '50%'
            }
          },
          svgStyle: {
            width: '90%'
          },
          from: {
            color: '#fda006',
            width: 6
          },
          to: {
            color: '#fda006',
            width: 6
          },
          // Default for anime calls
          step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
              circle.setText('');
            } else {
              circle.setText(value);
            }

          }
        });

        bar.text.style.fontSize = '1rem';
        bar.animate(.84); 
      }

    }
    request.open("GET", "https://fe18.azurewebsites.net/api/downloads", true);
    request.send();
  };


  //Dist chart
  if ($("#distribution-chart").length) {

    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.response);

        let city1 = object.datasets[0].city;


        var areaData = {
          labels: object.labels,
          datasets: [{
            data: object.datasets[0].data,
            backgroundColor: [
              "#3da5f4", "#f1536e", "#fda006"
            ],
            borderColor: "rgba(0,0,0,0)"
          }
          ]
        };
        var areaOptions = {
          responsive: true,
          maintainAspectRatio: true,
          segmentShowStroke: false,
          cutoutPercentage: 72,
          elements: {
            arc: {
              borderWidth: 4
            }
          },
          legend: {
            display: false
          },
          tooltips: {
            enabled: true
          },
          legendCallback: function (chart) {
            var text = [];
            text.push('<div class="distribution-chart">');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[0] + '"></div>');
            text.push(city1[0]);
            text.push('</div>');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[1] + '"></div>');
            text.push(city1[1]);
            text.push('</div>');
            text.push('<div  class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[2] + '"></div>');
            text.push(city1[2]);
            text.push('</div>');
            text.push('</div>');
            return text.join("");
          },
        }
        var distributionChartPlugins = {
          beforeDraw: function (chart) {
            var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;

            ctx.restore();
            var fontSize = .96;
            ctx.font = "600 " + fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#000";

            var text = "70%",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
          }
        }
        var distributionChartCanvas = $("#distribution-chart").get(0).getContext("2d");
        var distributionChart = new Chart(distributionChartCanvas, {
          type: 'doughnut',
          data: areaData,
          options: areaOptions,
          plugins: distributionChartPlugins
        });
        document.getElementById('distribution-legend').innerHTML = distributionChart.generateLegend();
      }

    }
    request.open("GET", "https://fe18.azurewebsites.net/api/distributionchart", true);
    request.send();
  };

// Sales report
  if ($("#sale-report-chart").length) {

    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.response);


        var CurrentChartCanvas = $("#sale-report-chart").get(0).getContext("2d");
        var CurrentChart = new Chart(CurrentChartCanvas, {
          type: 'bar',
          data: {
            labels: object.labels,
            datasets: [{
              label: object.datasets[0].label,
              data: object.datasets[0].data,
              backgroundColor: ["#3da5f4", "#e0f2ff", "#3da5f4", "#e0f2ff", "#3da5f4", "#e0f2ff", "#3da5f4", "#e0f2ff", "#3da5f4", "#e0f2ff", "#3da5f4"]
            }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }
            },
            scales: {
              yAxes: [{
                display: true,
                gridLines: {
                  drawBorder: false
                },
                ticks: {
                  fontColor: "#000",
                  display: true,
                  padding: 20,
                  fontSize: 14,
                  stepSize: 10000,
                  callback: function (value) {
                    var ranges = [
                      { divider: 1e6, suffix: 'M' },
                      { divider: 1e3, suffix: 'k' }
                    ];
                    function formatNumber(n) {
                      for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                          return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                      }
                      return n;
                    }
                    return "$" + formatNumber(value);
                  }
                }
              }],
              xAxes: [{
                stacked: false,
                categoryPercentage: .6,
                ticks: {
                  beginAtZero: true,
                  fontColor: "#000",
                  display: true,
                  padding: 20,
                  fontSize: 14
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                  display: true
                },
                barPercentage: .7
              }]
            },
            legend: {
              display: false
            },
            elements: {
              point: {
                radius: 0
              }
            }
          }
        });
      }
    }
    request.open("GET", "https://fe18.azurewebsites.net/api/salereportchart", true);
    request.send();
  };

//Sales report
  if ($("#sales-report-overview").length) {
    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.response);



        $("#downloadsNr").text(`${object.downloads}`);
        $("#purchasesNr").text(`${object.försäljning}`);
        $("#usersNumber").text(`${object.users}`);
        $("#sale-report-growth").text(`${object.growth}`);

      }

    }
    request.open("GET", "https://fe18.azurewebsites.net/api/salesreportoverview", true);
    request.send();
  };

  //Uppdates
  if ($("#updateBox").length) {
    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.response);


        for (var i = 0; i < object.updates.length; i++) {

          $("#updateBox").append(` <li >
          <h6 id="updatesTitle0">${object.updates[i].title}</h6>
          <p id="updatesDescription0"class="mt-2">${object.updates[i].description}</p>
          <p id="updatesTime0" class="text-muted mb-4">
            <i class="mdi mdi-clock-outline">${object.updates[i].time}</i>
          </p>
        </li>`);

        }

      }

    }
    request.open("GET", "https://fe18.azurewebsites.net/api/updates", true);
    request.send();
  };

// Tickets dropdown
  if ($("#tickets-box").length) {
    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.response);

        for (var i = 0; i < object.tickets.length; i++) {

          let names = object.tickets[i].fullname.split(" ");
          let initzials = names[0].charAt(0) + names[1].charAt(0);


          $("#tickets-box").append(`<tr>
                          <td class="pl-0">
                            <div class="icon-rounded-primary icon-rounded-md">
                              <h4 class="font-weight-medium">${initzials}</h4>
                            </div>
                          </td>
                          <td>
                            <p id="ticketName1" class="mb-0">${object.tickets[i].fullname}</p>
                            <p id="ticketCity1" class="text-muted mb-0">${object.tickets[i].city}</p>
                          </td>
                          <td>
                            <p id="ticketDate1" class="mb-0">${object.tickets[i].date}</p>
                            <p id="ticketTime1" class="text-muted mb-0">${object.tickets[i].time}</p>
                          </td>
                          <td>
                            <p id="ticketProject1" class="mb-0">${object.tickets[i].project}</p>
                            <p id="ticketMap1" class="text-muted mb-0">${object.tickets[i].status}</p>
                          </td>
                          <td class="pr-0">
                            <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                          </td>
                        </tr>`);


        }

      }

    }
    request.open("GET", "https://fe18.azurewebsites.net/api/tickets", true);
    request.send();
  };

 //Open invoices
  if ($("#openInvoices").length) {
    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.response);

        for (var i = 0; i < object.invoices.length; i++) {


          $("#openInvoices").append(`<tr>
          <p><td>${object.invoices[i].invoicenumber}</td></p>
          <td>${object.invoices[i].customer}</td>
          <td>${object.invoices[i].shipping}</td>
          <td class="font-weight-bold">${object.invoices[i].totalprice}</td>
          <td>${object.invoices[i].customerprice}</td>
          <td>
            <div class="badge badge-success badge-fw">${object.invoices[i].status}s</div>
          </td>
        </tr>`);
        }


      }

    }
    request.open("GET", "https://fe18.azurewebsites.net/api/openinvoices", true);
    request.send();
  };

  //LOGOUT
  $("#logout").button().click(function() {
    window.location.href = "login.html";
  });

});
