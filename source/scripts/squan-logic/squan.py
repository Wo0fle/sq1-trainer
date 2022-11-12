""" Logic for the entire virtual Square-1 """

from layer import Layer
import parity_check

pieces = [
    (2, "FL"),
    (1, "L"),
    (2, "BL"),
    (1, "B"),
    (2, "BR"),
    (1, "R"),
    (2, "FR"),
    (1, "F"),
]

top_layer = Layer("top", pieces)
bottom_layer = Layer("bottom", pieces)


class Squan:
    """Virtual Square-1 object"""

    def __init__(self, top, bottom):
        self.top = top
        self.bottom = bottom

    def slice(self):
        """Slice"""
        # deal with this asap or like whenever you can lol
        print("So this will do stuff i think")

    def check_for_parity(self):
        """Check for parity"""
        if parity_check.has_parity_problem(self.top, self.bottom):
            return "Has odd parity"

        return "Has even parity"
