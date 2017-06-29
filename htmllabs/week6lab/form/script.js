/* 
Create an html document containing a form and a list. The list items will be populated from your
JavaScript array.

The form will accept input, such as name, age, and address and will add it to the list of data. It will check if a name already exists in the list. 
If it does, trigger an update instead of adding to the list.

The list items are populated from the data array and when a name is selected, it displays the object 
details in the same input fields that were used to add or update the data.

1. Add JQuery CDN script in the index.html

2. Specify the document ready function to execute when the DOM is fully loaded

3. Add an event on the submit button to add or update an object in the list. Be sure to use PreventDefault to prevent the page refreshing on the form submit. 
After posting:
    a. Repopulate the list items with the updated data

4. Add an event on the dropdown so when a name is selected from the list, the object's details are displayed in the form
    a. If 'select a name' is selected, clear the form 

5. Add an event to the anchor within the list items so when a name is clicked, the object's details are displayed in the form

6. Add an event on the clear button to clear the form data

Bonus:
    Instead of using a list, try this exercise with a dropdown menu instead. Populate the dropdown menu with the data from the array. When data is
    submitted through the form, add or update the data and display it on the dropdown menu. Also, when a name is clicked from the dropdown menu, it
    should populate the form.
*/

/* global $ */
var data = [{
        "name": "Bob",
        "age": 35,
        "address": {
            "street": "6565 Sunset Blvd",
            "zip": "90028",
            "city": "Los Angeles"
        }
    }, {
        "name": "Angela",
        "age": 25,
        "address": {
            "street": "1234 Tropicana blvd",
            "zip": "89100",
            "city": "Las Vegas"
        }
    }, {
        "name": "Carol",
        "age": 52,
        "address": {
            "street": "4232 Melrose ave",
            "zip": "90029",
            "city": "Los Angeles"
        }
    }, {
        "name": "Jack",
        "age": 63,
        "address": {
            "street": "1344 First Street",
            "zip": "90105",
            "city": "Las Vegas"
        }
    }, {
        "name": "Celine",
        "age": 21,
        "address": {
            "street": "1344 First Street",
            "zip": "10003",
            "city": "New York"
        }
    }, {
        "name": "Luke",
        "age": 74,
        "address": {
            "street": "1344 first street",
            "zip": "10105",
            "city": "Bronx"
        }
    }, {
        "name": "Martin",
        "age": 55,
        "address": {
            "street": "1344 first street",
            "zip": "10108",
            "city": "Bronx"
        }
    }];



$(document).ready(function(){
    
    function populate(people,newList,personObj)
    {
        if(newList)
        {
            people.forEach(function(person){
            var personNameLi = $('<li class="personName"><a name="'+person.name+'" href="#">Name: ' + person.name +'</a></li>');
            var personInfoUl = $('<ul><li class="personAge">Age: '+ person.age +'</li><li class="personAddress">Address: '+ person.address.street+', '+ person.address.city + ', ' + person.address.zip+ '</li></ul>');
            
            
            $("#peopleList").append(personNameLi);
            $("#peopleList").append(personInfoUl);
            
                
            }); 
        }
        else
        {
            var personNameLi = $('<li class="personName"><a name="'+personObj.name+'" href="#">Name: ' + personObj.name +'</a></li>');
            var personInfoUl = $('<ul><li class="personAge">Age: '+ personObj.age +'</li><li class="personAddress">Address: '+ personObj.address.street+', '+ personObj.address.city + ', ' + personObj.address.zip+ '</li></ul>');
            var personNameOption = $('<option value="'+personObj.name+'">'+personObj.name+'</option>')

            personNameLi.find("a").click(function(){
                var clickedName = $(this).attr("name");
                console.log("I'm in the populate " + clickedName);
        
                fillFormFromClicked(findItemInData(clickedName));
        
            });
            
            $("#peopleList").append(personNameLi);
            $("#peopleList").append(personInfoUl);
            fillDropdown(null,false,personObj)
                
            
        }
        
    }
    
    function updatePersonLi(matchedPerson)
    {
        
        console.log("I'm in the update li function");
        
        var samePersonLi = $('a[name="'+matchedPerson.name+'"]');
        console.log("Here is same person li");
        console.log(samePersonLi.text());
        
        // samePersonLi.html(matchedPerson.name);
        
        
        
        var personOtherInfoUl = samePersonLi.parent().next("ul");
        
        console.log("preson other info");
        console.log(personOtherInfoUl);
        
        var personAgeLi = personOtherInfoUl.children(".personAge");
        personAgeLi.html("Age: " + matchedPerson.age);
        
        console.log("preson age li");
        console.log(personAgeLi);
        
        var personAddressLi = personOtherInfoUl.children(".personAddress");
        personAddressLi.html('Address: ' + matchedPerson.address.street +', '+matchedPerson.address.city+', '+matchedPerson.address.zip);
    }
    
    function updateDataArray(personObj,matchedItemIndex)
    {
        data[matchedItemIndex].age = personObj.age;
        data[matchedItemIndex].address.street = personObj.address.street;
        data[matchedItemIndex].address.city = personObj.address.city;
        data[matchedItemIndex].address.zip = personObj.address.zip;
        
        console.log("I'm in the updateDataArray function and here is the info"+ data[matchedItemIndex].name + data[matchedItemIndex].age+data[matchedItemIndex].address.street+data[matchedItemIndex].address.city+data[matchedItemIndex].address.zip);
        
        
    }
    
    
    function fillForm(personToFillForm)
    {
        $('input[name="name"]').val(personToFillForm.name);
        $('input[name="age"]').val(personToFillForm.age);
        $('input[name="street"]').val(personToFillForm.address.street);
        $('input[name="city"]').val(personToFillForm.address.city);
        $('input[name="zip"]').val(personToFillForm.address.zip);
    }
    
    function fillFormFromClicked(personObj)
    {
        $('input[name="name"]').val(personObj.name);
        $('input[name="age"]').val(personObj.age);
        $('input[name="street"]').val(personObj.address.street);
        $('input[name="city"]').val(personObj.address.city);
        $('input[name="zip"]').val(personObj.address.zip);
        
    }
    
    function findItemInData(personName)
    {
        function cmpr(currentItem)
        {
            return currentItem.name === personName;
        }
        
        var matchedPerson = data.find(cmpr);
        
        return matchedPerson;
    }
    
    function addPersonToData(personObj)
    {
        data.push(personObj);
    }
    
    function fillDropdown(people,newList,newPerson)
    {
        console.log("The fillDropdown function ran");
        if(newList)
        {
            console.log("The fillDropdown function, I'm in the if statement");
            people.forEach(function(person){
            var personNameOption = $('<option class="personNameOption" value="'+person.name+'">' + person.name +'</option>');
            
            $("#namesDropdwon").append(personNameOption);
            }); 
            
        }
        else
        {
            console.log("The fillDropdown function, I'm in the else statement");
            var personNameOption = $('<option class="personNameOption" value="'+newPerson.name+'">' + newPerson.name +'</option>');
            
            $("#namesDropdwon").append(personNameOption);
            
        }
    }
    
    
    function resetForm()
    {
        $('input[name="name"]').val("");
        $('input[name="age"]').val("");
        $('input[name="street"]').val("");
        $('input[name="city"]').val("");
        $('input[name="zip"]').val("");
        
    }
    
    
    
    
    //app starts
    populate(data,true);
    
    $('input[type="submit"]').click(function(event){
        
        //prevent the default submit behavior
        event.preventDefault();
        
        //creating a person obj to hold the form input
        
        var personFromInput = {};
        personFromInput.name = $('input[name="name"]').val();
        personFromInput.age = $('input[name="age"]').val();
        personFromInput.address = {};
        personFromInput.address.street = $('input[name="street"]').val();
        personFromInput.address.city = $('input[name="city"]').val();
        personFromInput.address.zip = $('input[name="zip"]').val();
        
        console.log("here is the object person from input" + personFromInput.name);
        console.log("age " + personFromInput.age);
        console.log("city " + personFromInput.address.city);
        console.log("street " + personFromInput.address.street);
        console.log("zip " + personFromInput.address.zip);
        
        // function compareName(currentItem)
        // {
        //     return currentItem.name === personFromInput.name;
        // }
        
        
        var matchedItem = findItemInData(personFromInput.name);
        
        
        if(matchedItem)
        {
            console.log("Im in the matcheditem if statement");
            
            var matchedItemIndex = data.indexOf(matchedItem);
            updateDataArray(personFromInput,matchedItemIndex);
            
            updatePersonLi(personFromInput);
            
            resetForm();         
        }
        else
        {
            console.log("Im in the matcheditem else statement");
            var personFromInput = {};
            personFromInput.name = $('input[name="name"]').val();
            personFromInput.age = $('input[name="age"]').val();
            personFromInput.address = {};
            personFromInput.address.street = $('input[name="street"]').val();
            personFromInput.address.city = $('input[name="city"]').val();
            personFromInput.address.zip = $('input[name="zip"]').val();
            
            addPersonToData(personFromInput);

            populate(null,null,personFromInput);
            
            
            resetForm();
            //add event listener to the new li a
            $('a[name]').click(function(){
                var clickedName = $(this).attr("name");
                console.log("Here is the name attr of the name you clicked" + clickedName);
            
                fillFormFromClicked(findItemInData(clickedName));
            });            
            
            
        }
    });
    
    $('a[name]').click(function(){
        var clickedName = $(this).attr("name");
        console.log("Here is the name attr of the name you clicked" + clickedName);
        
        fillFormFromClicked(findItemInData(clickedName));
        
    });
    
    fillDropdown(data,true);
    
    $("#namesDropdwon").on("change",function(){
        
        var selectedPersonName = $(this).val();
        var selectedPersonObj = findItemInData(selectedPersonName);
        if(selectedPersonName === "selectName")
        {
            resetForm();
        }
        else
        {
            fillFormFromClicked(selectedPersonObj);
        }
                
    });
  
});