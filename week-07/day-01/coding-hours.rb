# // An average Green Fox attendee codes 6 hours daily
# // The semester is 17 weeks long
# //
# // Print how many hours is spent with coding in a semester by an attendee,
# // if the attendee only codes on workdays.
# //
# // Print the percentage of the coding hours in the semester if the average
# // work hours weekly is 52

$avg_coding_hour = 6
$semester_length = 17

def time_spent_coding_per_semester
    days_spent_coding = 5
    days_spent_coding * $avg_coding_hour * $semester_length
end

def percentage_of_coding_hours 
    weekly_working_hour = 52
    time_spent_coding_per_semester.to_f / ( weekly_working_hour * $semester_length ) * 100
end


print "average time spent coding in a week #{ time_spent_coding_per_semester }\n"
print "Percentage of coding hours in a semester is #{ percentage_of_coding_hours.round(0) }%"
