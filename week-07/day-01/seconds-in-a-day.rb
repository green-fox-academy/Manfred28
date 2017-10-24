current_hours = 14;
current_minutes = 34;
current_seconds = 42;

# // Write a program that prints the remaining seconds (as an integer) from a
# // day if the current time is represented by these variables

SECONDS_IN_A_DAY = 60*60*24
current_time_in_seconds = current_hours * 60 * 60 + current_minutes * 60 + current_seconds
remaining_seconds = SECONDS_IN_A_DAY - current_time_in_seconds

