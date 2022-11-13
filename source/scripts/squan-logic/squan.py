""" Logic for the entire virtual Square-1 """

from layer import Layer
import parity_check

"""pieces = [
    (2, "FL"),
    (1, "L"),
    (2, "BL"),
    (1, "B"),
    (2, "BR"),
    (1, "R"),
    (2, "FR"),
    (1, "F"),
]

solved_top_layer = Layer("top", pieces)
solved_bottom_layer = Layer("bottom", pieces)"""


class Squan:
    """Virtual Square-1 object"""

    def __init__(self, top=Layer, bottom=Layer):
        self.top = top
        self.bottom = bottom

    def slice(self):
        """Slice"""
        top_layer = self.top
        bottom_layer = self.bottom

        top_layer.remove_slice_pieces()
        bottom_layer.remove_slice_pieces()

    def check_for_parity(self):
        """Check for parity"""
        if parity_check.has_parity_problem(self.top, self.bottom):
            return "Has odd parity"

        return "Has even parity"
