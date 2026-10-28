# Duplicate Detection & Audit

Source SHA-256: `c281c5c591d1342739aa4e2af25109fcf86d16621bc2711a32489091198292d9` (unchanged: True)

| Measure | Count |
|---|---|
| Data rows checked | 6 |
| Exact duplicate groups | 1 |
| Near-duplicate groups (case/spacing only) | 1 |
| Same key, different details | 1 |
| Rows involved in any group | 6 |

Row numbers match your file as opened in a spreadsheet (header = row 1).
Nothing was merged or deleted: you decide which record to keep.

| Group | Kind | Rows | Detail |
|---|---|---|---|
| 1 | exact-duplicate | 2 3 | identical in every column |
| 2 | near-duplicate | 4 5 | identical once letter case and spacing are ignored |
| 3 | key-conflict | 6 7 | same ID; review before merging; differs in Product |
