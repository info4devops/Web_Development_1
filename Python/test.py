from functools import reduce

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
doubled_numbers = list(map(lambda x: x * 2, even_numbers))
sum_of_doubled = reduce(lambda x, y: x + y, doubled_numbers)

print(even_numbers) #[2, 4, 6, 8, 10]
print(doubled_numbers) #[4, 8, 12, 16, 20]
print(sum_of_doubled)  # Output: 60
