# An average Green Fox attendee codes 6 hours daily
# The semester is 17 weeks long
#
# Print how many hours is spent with coding in a semester by an attendee,
# if the attendee only codes on workdays.
#
# Print the percentage of the coding hours in the semester if the average
# work hours weekly is 52

daily_coding_hours = 6
hours_coded_per_week = 5 * daily_coding_hours
semester_length_in_weeks = 17

avg_working_hours = 52
total_hours_in_week = 24 * 7
hours_coded_in_semester =  avg_working_hours * semester_length_in_weeks
total_hours_in_semester = total_hours_in_week * semester_length_in_weeks


print("hours spent coding in semester: " + str(hours_coded_per_week * semester_length_in_weeks))
print("average hours spent coding per week: " + str(hours_coded_in_semester / total_hours_in_semester))