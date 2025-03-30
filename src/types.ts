export type Grid = (number | string)[][];

export interface GridItemProps {
  rowIndex: number;
  colIndex: number;
  value: number | string;
  onDelete: (rowIndex: number, colIndex: number) => void;
}

export interface GridComponentProps {
  grid: Grid;
  onGridUpdate: (newGrid: Grid) => void;
} 