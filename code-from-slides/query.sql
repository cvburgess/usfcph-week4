SELECT
  -- The names of the fields you want to return
  title,
  description,
  is_urgent,
  due_on
FROM
  -- The name of the table that has the data
  task
WHERE
  -- Filters and conditions to apply
  created_by = 1
ORDER BY
  -- How the data should be sorted
  due_on;