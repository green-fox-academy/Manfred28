# // An average Green Fox attendee codes 6 hours daily
# // The semester is 17 weeks long
# //
# // Print how many hours is spent with coding in a semester by an attendee,
# // if the attendee only codes on workdays.
# //
# // Print the percentage of the coding hours in the semester if the average
# // work hours weekly is 52

AVG_CODING_HOURS = 6
SEMESTER_LENGTH = 17
DAYS_SPENT_CODING = 5
WEEKLY_WORKING_HOURS = 52

def time_spent_coding_per_semester
    DAYS_SPENT_CODING * AVG_CODING_HOURS * SEMESTER_LENGTH
end

def percentage_of_coding_hours 
    time_spent_coding_per_semester.to_f / ( WEEKLY_WORKING_HOURS * SEMESTER_LENGTH ) * 100
end


print "average time spent coding in a week #{ time_spent_coding_per_semester }\n"
print "Percentage of coding hours in a semester is #{ percentage_of_coding_hours.round(0) }%"
