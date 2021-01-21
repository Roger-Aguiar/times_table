/* 
Name:         Roger Silva Santos Aguiar
Function:     It displays a times table
Initial date: January 13, 2021
Last update:  January 21, 2021  
*/

function display_times_table()
{   
    clear_fields(); 

    var times_table = parseInt(document.getElementById("times_table").value, 10);
    var initial_value = parseInt(document.getElementById("initial_value").value, 10);
    var final_value = parseInt(document.getElementById("final_value").value, 10);
    var is_a_number = validate_fields(times_table, initial_value, final_value);   
    
    if(is_a_number == true)
    {
        document.getElementById("result").innerHTML = "Times table for the number " + times_table;
        while(initial_value <= final_value)
        {
            var result = times_table * initial_value;
            document.getElementById("results").innerHTML += times_table + " * " + initial_value + " = " + result + "<br />";
            initial_value++;
        }
    }   
}

function validate_fields(times_table, initial_value, final_value)
{
    var is_a_number = false;

    if(isNaN(times_table) == true || isNaN(initial_value) == true || isNaN(final_value) == true)
    {
        alert("You have entered some invalid value, please, check the fields and try again!");   
                   
    }
    else 
    {
        is_a_number = true;
    }
   
    return is_a_number;
}

function clear_fields()
{
    document.getElementById("result").innerHTML = "";
    document.getElementById("results").innerHTML = "";
}