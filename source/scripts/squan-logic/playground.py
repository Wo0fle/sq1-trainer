""" The place to test the virtual Square-1! """

from squan import Squan
from layer import Layer


def main():
    """Main function"""
    solved_pieces = [
        (2, "FL"),
        (1, "L"),
        (2, "BL"),
        (1, "B"),
        (2, "BR"),
        (1, "R"),
        (2, "FR"),
        (1, "F"),
    ]

    solved_top_layer = Layer("top", solved_pieces)
    solved_bottom_layer = Layer("bottom", solved_pieces)

    solved_squan = Squan(solved_top_layer, solved_bottom_layer)


if __name__ == "__main__":
    main()
