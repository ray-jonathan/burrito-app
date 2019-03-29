create table burritos (
    id serial primary key,
    fillings varchar(100), -- "varchar" is equivalent to "character varying"
    style varchar(100)  -- "varying" just means that it won't be filled with spaces
)
