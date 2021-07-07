require 'nokogiri'
require 'open-uri'
     doc = Nokogiri::HTML(open("https://en.wikipedia.org/wiki/Periods_in_Western_art_history"))
     doc.css(".mw-headline").text
     
