const companies = [
{name:"company One",catagory:"finance",start:1992,end:2003},
{name:"company two",catagory:"retail",start:1961,end:2020},
{name:"company two",catagory:"retail",start:1962,end:2020},
{name:"company two",catagory:"retail",start:1999,end:2020},
{name:"company three",catagory:"auto",start:1999,end:2012},
{name:"company four",catagory:"Technology",start:1987,end:2016},
{name:"company five",catagory:"finance",start:1983,end:2015},

];
const age = [39,12,20,16,5,54,21,44,61,13,15,45]

/*for(let i=0;i<companies.length;i++){
	console.log(companies[i]);
}*/

/*companies.forEach( function(companies) {
	console.log(companies);
});*/

/*let canDrink = age.filter(function(age){
	if(age>=21){
		return true;
	}
})*/


/*for(let i=0;i<age.length;i++){
	if(age[i]>=21){
		canDrink.push(age[i]);
	}
}*/

/*const canDrink = age.filter(age=>age>=21);

console.log(canDrink);
*/

/*let retailCompanies =companies.filter(function(company){
if(company .catagory==='retail'){
	return true;
}
})*/
/*const retailCompanies = companies.filter(company=>
	company.catagory==='retail');
console.log(retailCompanies);*/

//get 60s company
/*const sixtysCompany = companies.filter(company=>company.start>=1960
	&& company.start<1970);
console.log(sixtysCompany)*/

//companies lasted 15 years
/*const lastedfiftinyears = companies.filter(company=>company.end-company.start >15);
console.log(lastedfiftinyears)*/

//map

/*const companyNames= 
companies.map(company=>`${company.name} [${company.start}]-[${company.end}]`);
console.log(companyNames);*/

/*const ageMap = age
.map(age =>Math.sqrt(age))
.map( age =>age*2);
console.log(ageMap);*/

//sort
//sort companies by start year

/*const sortCompanies = companies.sort(function(c1,c2){
	if(c1.start > c2.start){
		return 1;
	}else {
		return -1;
	}
});*/

/*const sortCompanies = companies.sort((a,b)=>a.start>b.start ? 1 : -1);
console.log(sortCompanies);*/

/*const sortAges = age.sort();

const sortAgesAccending = age.sort((a,b)=>a-b);
console.log(sortAgesAccending);*/


//reduce()

/*let ageSum = 0;
for(let i = 0;i<age.length;i++){
	ageSum += age[i];
}*/

const ageSum = age.reduce((total,age)=> total + age,0);

console.log(ageSum);

//get total years of all companies
/*const totalYears = companies.reduce(function(total,company){
	return total + (company.end-company.start);
},0);*/


const totalYears = companies.reduce((total,company)=>total+(company.end-company.start),0)
console.log(totalYears);

const combaine = age
.map(age=>age*2)
.filter(age=> age<=40)
.sort((a,b)=>a-b)
.reduce((a,b)=>a+b,0)

console.log(combaine)