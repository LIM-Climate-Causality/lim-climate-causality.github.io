library(dplyr)
library(scholar)
library(stringr)

# list of google scholar id's in the group that I could find
researcher_ids <- c('ehVPFfQAAAAJ&hl=en', 'viviYAMAAAAJ&hl=de', 'IZC7zeUAAAAJ&hl=en', 'LVRfN6QAAAAJ&hl=de', 'j3grcqMAAAAJ&hl=es', 'dYLtLFIAAAAJ&hl=de', 'JwO0TTMAAAAJ&hl=en', 'ORqOL9wAAAAJ&hl=de')

# names associated with the google scholar ids to format bold in the table
names_to_bold <- c("FR Spuler", "F Spuler", "M Kretschmer", "J Mindlin", "S Sippel", "M Friedel", "J Carvalho-Oliveira", 'PL Bommer', 'P Pfleiderer')

bold_names <- function(author_string, names_vector) {
  for (name in names_vector) {
    author_string <- str_replace_all(author_string, fixed(name), paste0("**", name, "**"))
  }
  return(author_string)
}

# get publications for each scholar ID
all_pubs <- lapply(researcher_ids, function(id) {
  pubs <- get_publications(id)
  pubs$scholar_id <- id
  return(pubs)
})
# Combine into one data frame
combined_pubs <- bind_rows(all_pubs)

# different filters
filtered_pubs <- combined_pubs %>%
  filter(cites > 0) %>% # to remove all EGU or other conference abstracts 
  #filter(year>2021) %>% # removed for now after Marlene's comment
  filter(!is.na(journal) & journal != "") %>% # if the journal column is empty that might be a duplicate / also a conference abstract
  select(-c(cites, cid, pubid, scholar_id, number)) %>% # remove columns we don't want to display on the website
  arrange(desc(year)) %>% # sort by year descending
  distinct() %>% # remove any remaining duplicates
  mutate(author = sapply(author, bold_names, names_vector = names_to_bold)) # format names specified above in bold

write.csv(filtered_pubs, 'Documents/GitHub/lim-climate-causality.github.io/publications/publications.csv', row.names = FALSE) # change to filepath 
