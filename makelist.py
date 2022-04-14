with open('list.txt') as file:
    words = [line.rstrip() for line in file]

print(words)

textfile = open("wordle.txt", "w")

textfile.write(str(words))