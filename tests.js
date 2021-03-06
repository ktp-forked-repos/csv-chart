let csvChart = require('./index');

let a = `foo,bar,baz
22462464,10295296,5624728
22941696,10295296,6085280
23003136,10295296,6141496
23048192,10295296,6188480`;

console.log(JSON.stringify(csvChart(a), null, '  '));


let b = `name	rank	count	prop100k	cum_prop100k	pctwhite	pctblack	pctapi	pctaian	pct2prace	pcthispanic
SMITH	1	2376206	880.85	880.85	73.35	22.22	0.4	0.85	1.63	1.56
JOHNSON	2	1857160	688.44	1569.3	61.55	33.8	0.42	0.91	1.82	1.5
WILLIAMS	3	1534042	568.66	2137.96	48.52	46.72	0.37	0.78	2.01	1.6
BROWN	4	1380145	511.62	2649.58	60.71	34.54	0.41	0.83	1.86	1.64
JONES	5	1362755	505.17	3154.75	57.69	37.73	0.35	0.94	1.85	1.44
MILLER	6	1127803	418.07	3572.82	85.81	10.41	0.42	0.63	1.31	1.43
DAVIS	7	1072335	397.51	3970.33	64.73	30.77	0.4	0.79	1.73	1.58`;

console.log(JSON.stringify(csvChart(b, {debug: true, delimiter: '\t'}), null, '  '));


// Assume last line is invalid and should throw warning
let c = `Col1|Col2|Col3
1|2|3
4|5|6
7|8|9
a|b|c`;

console.log(JSON.stringify(csvChart(c, {delimiter: '|'}), null, '  '));


let d = `Symbol Total Share Volume
A 41,985,600
AA 86,084,538
AAC 5,112,074
AAN 20,713,615
AAP 47,199,729
AAT 6,391,620
AAV 2,543,764
AB 4,479,245
ABB 35,969,704
ABBV 100,958,518
ABC 47,167,487
ABEV 438,699,711
ABG 4,772,721
ABM 4,873,286`;

console.log(JSON.stringify(csvChart(d), null, '  '));


// TimeSeriesDatasets_130207/NZAccomodation.csv
let e = ` DATE,Hotel,BackPackers,Motel
2000M01,50,59.8,58.9
2000M02,66.9,59.8,65.5
2000M03,58.2,54.6,59.8
2000M04,52.2,48.8,56.3
2000M05,43.9,34.7,40.2
2000M06,40.4,31.3,39.3
2000M07,46.1,35,45.1
2000M08,48.4,34.5,43.4
2000M09,46.9,34.6,47.1
2000M10,53.3,37.1,50.5
2000M11,65.7,48,56.3
2000M12,51.8,54,51.1
2001M01,58.1,59.3,63.8
2001M02,69.7,61.6,68.3
2001M03,66.1,55.5,64.4
2001M04,53.1,49.1,54.9
2001M05,47,36.3,42.2
2001M06,42.2,32.1,42
2001M07,48.1,37.1,47.9
2001M08,51.3,36.6,45.5
2001M09,50.6,37.7,49.6
2001M10,53.7,40.9,52.3
2001M11,61.1,50.5,55.7
2001M12,51.8,50.9,52.4
2002M01,57.8,61.4,64.3`;

console.log(JSON.stringify(csvChart(e), null, '  '));


let f = `DATE,Arrivals,Departures
2000M01,284361,288701
2000M02,273092,252533
2000M03,234368,286140
2000M04,263813,290177
2000M05,202172,235108
2000M06,200423,222173
2000M07,281012,250872
2000M08,234306,245299
2000M09,232494,242026
2000M10,296586,244084
2000M11,295022,280281
2000M12,323961,299410
2001M01,336818,326549
2001M02,287719,271105
2001M03,264181,306983
2001M04,271410,295370
2001M05,214684,246359
2001M06,224260,243564
2001M07,295746,260486
2001M08,257382,269931
2001M09,270109,259422
2001M10,288592,240720
2001M11,264907,250581
2001M12,317906,289293
2002M01,345696,319184`;

console.log(JSON.stringify(csvChart(f), null, '  '));


// TimeSeriesDatasets_130207/TempWorld1.csv
let g = `Date,CapeTownMax,CapeTownMin,BuenosAriesMax,BuenosAriesMin,ParisMax,ParisMin,MadridMax,MadridMin,TokyoMax,TokyoMin,BrisbaneMax,BrisbaneMin,AucklandMax,AucklandMin,LosAngelesMax,LosAngelesMin
2000M01,29.4,15.6,28.3,21.4,6.5,1.8,9.7,-1.4,11.2,4.2,28.2,19.1,23.4,15.5,19.6,10
2000M02,28.7,16.7,28,20.5,10.4,3.7,17,1.4,9.9,2.4,27.7,19.4,23.4,16.4,18.9,10.1
2000M03,27.3,15.7,25.1,18.3,12.2,4.3,17.6,4.3,13.5,5.2,27.9,19.3,22.6,14.8,18.6,10.1
2000M04,25.9,11.5,22,15.9,14.7,6.5,14.9,5.8,18.7,10.7,25.7,16.2,20.2,13.5,20.2,12.5
2000M05,22.4,9.6,17.5,11.9,20.4,11.7,23.3,10,24,16.5,23.1,12.9,18,11.8,21.9,14.2
2000M06,21.3,8.6,15.6,10.1,23.3,13,30.8,13.5,26.1,19.5,20.6,8.3,15.6,9.2,23.4,16.6
2000M07,19.4,6.9,13.1,6,21.9,12.8,31.7,15.7,31.6,24.5,21.2,6.8,15.8,10.2,23.7,16.8
2000M08,20.3,9.3,16.4,9,25.2,14.9,32.2,15.4,32.4,25.4,22.4,7.7,15.5,7.9,24.9,18.2
2000M09,19.8,8.5,17.7,10.8,21.5,12.7,28.3,11.9,28.9,22.7,25.1,11.3,16.7,9.4,25.2,16.7
2000M10,24.1,9.6,21.4,14,15,9.2,32,8.1,21.9,16.2,25.5,15.1,18,11.5,21.7,13.8
2000M11,25.4,13.8,24.6,15.1,11.1,5.9,13,4.3,16.7,10.5,25.6,16.7,18.5,11.6,20.5,8.7
2000M12,25.3,15,28.4,17.9,10,4.7,10.3,3.4,12.6,5.2,28.3,19.1,23,15.7,20.6,9.2
2001M01,27.7,15.4,29.5,20.9,7.6,2.4,10.2,2.8,8.6,1.7,29,20.5,22.9,15.2,18.4,7.4
2001M02,29.5,15.8,29.2,21.3,8.7,2.5,12.8,1.8,10.7,2.8,28.1,19.4,24.7,17.4,17.2,7.9
2001M03,27,13.7,26.7,19.6,12.4,5.6,5.9,7.1,14.4,5.7,29,19.5,23.3,14.6,17.7,10.9
2001M04,24.3,12.2,22.7,14.3,13.1,5.7,19,5.1,20.4,11.3,26,15.9,20.1,13,18,10.1
2001M05,22.1,9.6,17.1,10.8,20.6,10.7,22.4,9,23,16.4,23.6,11,17.8,12.3,21.4,14.3
2001M06,19.1,7.8,16.8,9.8,22.8,11.8,31.2,13.5,26.6,20.3,22.5,9.9,15.4,7.1,23.3,16`;

console.log(JSON.stringify(csvChart(g), null, '  '));


//
let h = `DATE,MaoriMale,TotalMale,MaoriFemale,TotalFemale
2000Q1,2144,7639,2025,7139
2000Q2,2087,7365,1907,6866
2000Q3,2064,7174,1929,6843
2000Q4,1908,6979,1787,6600
2001Q1,2130,7496,2058,7232
2001Q2,2034,7101,1950,6796
2001Q3,1996,6873,1912,6783
2001Q4,1908,6863,1851,6655
2002Q1,1907,6891,1853,6757
2002Q2,1875,6713,1776,6438
2002Q3,2007,7061,1801,6634
2002Q4,1818,6912,1834,6615`;

console.log(JSON.stringify(csvChart(h), null, '  '));


// http://www.stat.cmu.edu/~larry/all-of-statistics/=data/glass.dat
let i = `RI    Na   Mg   Al    Si    K    Ca   Ba   Fe  type
1    3.01 13.64 4.49 1.10 71.78 0.06  8.75 0.00 0.00  WinF
2   -0.39 13.89 3.60 1.36 72.73 0.48  7.83 0.00 0.00  WinF
3   -1.82 13.53 3.55 1.54 72.99 0.39  7.78 0.00 0.00  WinF
4   -0.34 13.21 3.69 1.29 72.61 0.57  8.22 0.00 0.00  WinF
5   -0.58 13.27 3.62 1.24 73.08 0.55  8.07 0.00 0.00  WinF
6   -2.04 12.79 3.61 1.62 72.97 0.64  8.07 0.00 0.26  WinF
7   -0.57 13.30 3.60 1.14 73.09 0.58  8.17 0.00 0.00  WinF
8   -0.44 13.15 3.61 1.05 73.24 0.57  8.24 0.00 0.00  WinF
9    1.18 14.04 3.58 1.37 72.08 0.56  8.30 0.00 0.00  WinF
10  -0.45 13.00 3.60 1.36 72.99 0.57  8.40 0.00 0.11  WinF
11  -2.29 12.72 3.46 1.56 73.20 0.67  8.09 0.00 0.24  WinF
12  -0.37 12.80 3.66 1.27 73.01 0.60  8.56 0.00 0.00  WinF`;

console.log(JSON.stringify(csvChart(i, {delimiter: /[ ,]+/}), null, '  '));


// Description:
// * The Montana poll asked a random sample of Montana residents whether
// their personal financial status was the worse, the same, or better than
// a year ago, and whether they thought the state economic outlook was
// better over the next year. This file contains these items and
// accompanying demographics about the respondents. The file contains
// results for every other person included in the poll. *
// Number of cases:
// * 209 *
// Variable Names:
// *

//    1. AGE = 1 under 35, 2 35-54, 3 55 and over
//    2. SEX = 0 male, 1 female
//    3. INC = yearly income: 1 under $20K, 2 20-35$K, 3 over $35K
//    4. POL = 1 Democrat, 2 Independent, 3 Republican
//    5. AREA = 1 Western, 2 Northeastern, 3 Southeastern Montana
//    6. FIN = Financial status 1 worse, 2 same, 3 better than a year ago
//    7. STAT = State economic outlook 1 better, 2 not better than a year ago
let m=`AGE  SEX      INC      POL  AREA       FIN    STAT
3	0	2	2	1	2	1
2	0	3	3	1	3	1
1	0	2	*	1	2	1
3	1	2	1	1	1	0
3	1	3	3	3	2	*
1	0	2	1	3	3	*
3	1	1	3	3	1	1
1	0	1	3	2	1	0
3	1	*	3	3	2	0
1	0	*	1	1	2	1
2	1	2	3	1	2	*
3	1	1	3	2	2	0`;

console.log(JSON.stringify(csvChart(m, {delimiter: '\t'}), null, '  '));
