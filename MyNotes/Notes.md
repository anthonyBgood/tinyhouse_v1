

## CLI call wen functions

###Call delete listing

I was having trouble getting curl to work
used the powershell functions instead 


>    $r = iwr http://localhost:9000/delete-listing `
>            -Method 'POST' `
>            -Headers @{'Content-Type' = 'application/json; charset=utf-8'} `
>            -Body '{"id":"001"}'


            
