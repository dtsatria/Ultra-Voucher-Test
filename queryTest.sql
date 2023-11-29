SELECT s.id,s.name, t.name AS parent_name FROM testparent AS s
LEFT JOIN testparent AS t ON t.id = s.parent_id
ORDER BY s.id
;