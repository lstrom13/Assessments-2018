#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]


array = [1, 2, 6, 9, 3, 21]
array.each do |item|
  item = item * 2
  puts "The current item * 2 is #{item}."
end

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.
******* can we go thorugh this together? i seem to be having a hard time figuring this out. i know its suppose to be syntax errors but dont seem to still be understanding.*****
``` ruby
class example
  def initialize(day)
    @day=day
  end

  def Say_hi
    if(day == "Friday"){
      puts "TGIF!"
    }
    elseif(day == "Monday"){
      puts "Its monday again"
    }
    else
      puts "another day"
  end
end
```
