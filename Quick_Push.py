import subprocess

# The Git commands you want to run
commands = [
    "git add *",
    'git commit -m "Updated Personal Website mrmontasir.com"',
    'git pull',
    "git push"
]

# Run the commands using a for loop
for command in commands:
    subprocess.run(command, shell=True)







# Users 
## Montasir 
## Abdelmoula    